import React from "react";
import VerficationTitle from "./components/verfication/VerficationTitle";
import VerficationData from "./components/verfication/VerficatoinData";

export default function Verfication() {
  return (
    <div className="bg-secondary w-full lg:h-[100vh] p-5 lg:p-0 ">
      <div className="flex flex-col-reverse justify-between items-center lg:flex-row h-full w-full bg-[#fff] rounded-2xl">
        <VerifyPage />
      </div>
    </div>
  );
}

function VerifyPage() {
  return (
    <>
      <VerficationTitle />
      <VerficationData />
    </>
  );
}
