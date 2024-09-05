"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/image/Logo.svg";
import NumberInput from "@/components/tools/input/NumberInput";
import SubmitButton from "@/components/tools/button/SubmitButton";
import { fetchData } from "@/utils/fetch";
import { useRouter } from "next/navigation";

const LoginData = () => {
  // const [remaining,setRemaining] = useState<number>(0);
  const route = useRouter();
  function Login(formData: FormData) {
    console.log(formData);
    try {
      const response = fetchData("/user/request", {
        method: "post",
        data: formData,
      })
        .then((data) => {
          if (data.status === 200) {
            return data;
          }
        })
        .then((resData) => {
          console.log("response data :", resData);
          // setRemaining(resData.remaining)
          localStorage.setItem("remaining", resData.remaining);
          route.push("/verfication");
        });
      console.log("main res :", response);
    } catch (e) {
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
