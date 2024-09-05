"use client";
import React, { useState } from "react";
import footwear from "@/public/image/footwear.png";
import Image from "next/image";
import { Collapse } from "antd";
import FileInput from "@/components/tools/input/FileInput";

function UploadFoot() {
  const [footSize, setFootSize] = useState<number>(0);
  return (
    <div className="bg-white-primary my-3 rounded-lg p-5 flex flex-col gap-5">
      <span dir="rtl" className="">
        ۱. سایز پا
      </span>
      <div className="flex flex-col justify-center items-center gap-3">
        <Image src={footwear} alt={"footwear"} />
        <input
          type="range"
          onChange={(e) => setFootSize(Number(e.target.value))}
          value={footSize}
        />
        <p dir="rtl" className="text-sm flex justify-center gap-2">
          <span>{footSize}</span>
          <span>سانتی متر</span>
        </p>
      </div>
      <div dir="rtl" className="">
        <span className="py-5">۲. لطفا از پایتان عکس بگیرید</span>
        <Collapse
          defaultActiveKey={["1"]}
          className="font-yekan"
          items={[
            {
              key: "1",
              label: "پای راست",
              children: <RightFoot />,
            },
            {
              key: "2",
              label: "پای چپ",
              children: <LeftFoot />,
            },
            {
              key: "3",
              label: "زانو ها",
              children: <Knees />,
            },
          ]}
        />
      </div>
    </div>
  );
}

function RightFoot() {
  return (
    <div className="grid justify-center align-middle grid-cols-2 gap-2 lg:grid-cols-4">
      <FileInput label="زاویه جلو" />
      <FileInput label="زاویه پشت" />
      <FileInput label="زاویه بالایی" />
      <FileInput label="زاویه داخل" />
    </div>
  );
}

function LeftFoot() {
  return (
    <div className="grid justify-center align-middle grid-cols-2 gap-2 lg:grid-cols-4">
      <FileInput label="زاویه جلو" />
      <FileInput label="زاویه پشت" />
      <FileInput label="زاویه بالایی" />
      <FileInput label="زاویه داخل" />
    </div>
  );
}

function Knees() {
  return (
    <div className="grid justify-center align-middle grid-cols-2 gap-2 lg:grid-cols-4">
      <FileInput label="زاویه جلو" />
      <FileInput label="زاویه پشت" />
    </div>
  );
}

export default UploadFoot;
