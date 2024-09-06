"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/image/Logo.svg";
import NumberInput from "@/components/tools/input/NumberInput";
import SubmitButton from "@/components/tools/button/SubmitButton";
import { fetchData } from "@/utils/fetch";
import { useRouter } from "next/navigation";
import { AxiosError, AxiosResponse } from "axios";
import { message } from "antd";

const LoginData = () => {
  // const [remaining,setRemaining] = useState<number>(0);
  const route = useRouter();
  function Login(formData: FormData) {
    console.log(formData);
    formData.append("hash", "web-app");
    try {
      const response = fetchData("/user/request", {
        method: "post",
        data: formData,
      })
        .then((data) => {
          console.log("axios res ", data);
          if (data) {
            return data;
          } else {
            message.error("شماره همراه درست وارد نشده است");
          }
        })
        .then((resData) => {
          console.log("response data :", resData);
          // setRemaining(resData.remaining)
          localStorage.setItem("remaining", resData.remaining);
          localStorage.setItem("field", formData.get("field") as string);
          route.push("/verfication");
        })
        .catch((reason: AxiosError) => {
          console.log(reason);
          if (reason.status === 400) {
            message.error("شماره همراه درست وارد نشده است");
          } else {
            // Handle else
          }
          console.log(reason.message);
        });
      console.log("main res :", response);
    } catch (e) {
      message.error("شماره همراه درست وارد نشده است");
      console.log(e);
    }
  }
  return (
    <form
      action={Login}
      className="flex flex-col justify-center items-center h-full gap-10 lg:w-full "
    >
      <Image src={Logo} alt="logo" className="w-32 h-32" />
      <h1 className="font-bold text-[20px]">ثبت نام با شماره همراه</h1>
      <div className="flex flex-col justify-center items-center gap-5">
        <NumberInput name="field" placeholder="شماره همراه" />
        <SubmitButton props={{ type: "submit" }}>ثبت و ادامه</SubmitButton>
      </div>
    </form>
  );
};

export default LoginData;
