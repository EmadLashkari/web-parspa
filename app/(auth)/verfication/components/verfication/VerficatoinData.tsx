"use client";

import SubmitButton from "@/components/tools/button/SubmitButton";
import TimingInput from "@/components/tools/input/TimingInput";
import Logo from "@/public/image/Logo.svg";
import Image from "next/image";

const VerficationData = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-10 lg:w-full ">
      <Image src={Logo} alt="logo" className="w-32 h-32" />
      <h1 className="font-bold text-[20px]">ثبت نام با شماره همراه</h1>
      <div className="flex flex-col justify-center items-center gap-5">
        <TimingInput numberOfDigits={5} />
        <SubmitButton>ثبت و ادامه</SubmitButton>
      </div>
    </div>
  );
};

export default VerficationData;
