import Image from "next/image";
import React from "react";
import LoginImg from "@/public/image/VerficationImg.svg";

const VerficationTitle = () => {
  return (
    <div className="lg:w-full lg:h-full flex flex-col justify-end items-center lg:bg-gradient-to-b lg:from-primary900 lg:to-white lg:shadow-xl lg:shadow-primary900">
      <div className="hidden lg:flex flex-col justify-center items-center pb-6">
        <h1 className="text-white text-[30px] font-bold">
          به پارس پا خوش آمدید
        </h1>
        <p className="text-white text-[21px] font-light">
          با پارس پا به راحتی راه بروید
        </p>
      </div>
      <Image src={LoginImg} alt="login page image" />
    </div>
  );
};

export default VerficationTitle;
