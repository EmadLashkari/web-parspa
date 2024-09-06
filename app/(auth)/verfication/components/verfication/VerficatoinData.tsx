"use client";

import SubmitButton from "@/components/tools/button/SubmitButton";
import TimingInput from "@/components/tools/input/TimingInput";
import Logo from "@/public/image/Logo.svg";
import { fetchData } from "@/utils/fetch";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const VerficationData = () => {
  const router = useRouter();
  const time =
    Number(typeof window !== "undefined" && localStorage.getItem("remaining")) /
    1000;
  console.log(time);
  const [remaining, setRemaining] = useState<number>(time);
  const [code, setCode] = useState("");
  setTimeout(() => {
    setRemaining(remaining - 1);
  }, 1000);

  function login() {
    const res = fetchData("/user/login", {
      method: "post",
      data: {
        field:
          typeof window !== "undefined" &&
          typeof window !== "undefined" &&
          localStorage.getItem("field"),
        code: code,
      },
    })
      .then((res) => res)
      .then((data) => {
        console.log(data);
        if (typeof window !== "undefined") {
          localStorage.setItem("token", data.token);
        }
        router.push("/");
      });
  }
  return (
    <div className="flex flex-col justify-center items-center h-full gap-10 lg:w-full ">
      <Image src={Logo} alt="logo" className="w-32 h-32" />
      <h1 className="font-bold text-[20px]">ثبت نام با شماره همراه</h1>
      <div className="flex flex-col justify-center items-center gap-5">
        <TimingInput setValue={setCode} numberOfDigits={4} />
        <div className="flex gap-3">
          <span>زمان باقی مانده</span>
          <span>{remaining}</span>
        </div>
        <SubmitButton props={{ onClick: login }}>ثبت و ادامه</SubmitButton>
      </div>
    </div>
  );
};

export default VerficationData;
