"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/public/image/Logo.svg";
import NumberInput from "@/components/tools/input/NumberInput";
import SubmitButton from "@/components/tools/button/SubmitButton";
import { fetchData } from "@/utils/fetch";
import { useRouter } from "next/navigation";
import { message, Spin } from "antd";
import { formDataToJson } from "@/utils/formDataToJson";

const LoginData = () => {
  const [remaining, setRemaining] = useState<number>(0);
  const [onLoading, setLoading] = useState<boolean>(false);
  const phone = useRef<string>("");
  const route = useRouter();

  useEffect(() => {
    localStorage.setItem("remaining", remaining.toString());
    localStorage.setItem("field", phone.current);
  }, [remaining]);
  async function Login(formData: FormData) {
    formData.append("hash", "web-app");
    try {
      const response = await fetchData(
        "user/request",
        {
          method: "post",
          body: formDataToJson(formData),
          headers: {
            "Content-type": "application/json",
          },
        },
        (status) => {
          // on error function
          message.error("شماره همراه درست وارد نشده است");
          console.log(onLoading);
          setLoading(false);
        },
        (data) => {
          // on success funtion
          setLoading(false);

          setRemaining(data.remaining);
          phone.current = formData.get("field")?.toString() as string;
          route.push("/verfication");
        }
      );
      // setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <form
      action={Login}
      onSubmit={() => setLoading(true)}
      className="flex flex-col justify-center items-center h-full gap-10 lg:w-full"
    >
      <Image src={Logo} alt="logo" className="w-32 h-32" />
      <h1 className="font-bold text-[20px]">ثبت نام با شماره همراه</h1>
      <div className="flex flex-col justify-center items-center gap-5">
        <NumberInput
          min={11}
          max={11}
          required
          name="field"
          placeholder="شماره همراه"
        />
        <Spin spinning={onLoading}>
          <SubmitButton
            props={{
              type: "submit",
              disabled: onLoading,
            }}
          >
            ثبت و ادامه
          </SubmitButton>
        </Spin>
      </div>
    </form>
  );
};

export default LoginData;
