"use client";
import SubmitButton from "@/components/tools/button/SubmitButton";
import TimingInput from "@/components/tools/input/TimingInput";
import Logo from "@/public/image/Logo.svg";
import { fetchData } from "@/utils/fetch";
import { message, Spin } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

interface CountdownProps {
  expireTime: number; // Expiration time in milliseconds
}

interface TimeLeft {
  minutes?: number;
  seconds?: number;
}

const VerficationData = () => {
  const router = useRouter();
  const [onLoading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState("");
  const expireTime =
    typeof window !== "undefined"
      ? new Date().getTime() + Number(localStorage.getItem("remaining"))
      : 300;
  const calculateTimeLeft = () => {
    const difference = expireTime - +new Date(); // Subtract current time from expiration time
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      router.push("/login");
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval when the component is unmounted or expireTime changes
    return () => clearInterval(interval);
  }, []);

  const timerComponents: JSX.Element[] = [];

  (Object.keys(timeLeft) as (keyof TimeLeft)[]).forEach((interval) => {
    if (!timeLeft[interval]) return;

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]}
        {":"}
      </span>
    );
  });

  function login() {
    setLoading(true);
    const res = fetchData(
      "user/login",
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          field:
            typeof window !== "undefined" &&
            typeof window !== "undefined" &&
            localStorage.getItem("field"),
          code: code,
        }),
      },
      (status) => {
        message.error("کد تایید درست نیست");
        setLoading(false);
      },
      (data) => {
        if (typeof window !== "undefined") {
          localStorage.setItem("token", data.token);
        }
        Cookies.set("token", data.token);
        setLoading(false);
        router.push("/");
      }
    );
  }
  return (
    <div className="flex flex-col justify-center items-center h-full gap-10 lg:w-full ">
      <Image src={Logo} alt="logo" className="w-32 h-32" />
      <h1 className="font-bold text-[20px]">ثبت نام با شماره همراه</h1>
      <div className="flex flex-col justify-center items-center gap-5">
        <TimingInput setValue={setCode} numberOfDigits={4} />
        <div className="flex flex-row justify-center items-center gap-2 text-tx-primary">
          <span className="text-sm">زمان باقی مانده</span>
          <span className="text-sm">
            {timeLeft["minutes"]} : {timeLeft["seconds"]}
          </span>
        </div>
        <Spin spinning={onLoading}>
          <SubmitButton props={{ onClick: login }}>ثبت و ادامه</SubmitButton>
        </Spin>
      </div>
    </div>
  );
};

export default VerficationData;
