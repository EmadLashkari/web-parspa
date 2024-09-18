"use client";
import React, { useEffect, useRef, useState } from "react";
import footwear from "@/public/image/footwear.png";
import Image from "next/image";
import { Collapse, InputNumber, message } from "antd";
import FileInput from "@/components/tools/input/FileInput";
import Input from "@/components/tools/input/Input";
import Link from "next/link";
import { z } from "zod";
import { useRouter } from "next/navigation";

type errors = {
  footlength?: string[] | undefined;
  weight?: string[] | undefined;
  feetSize?: string[] | undefined;
};

const schema = z.object({
  footlength: z
    .number()
    .min(30, "سایز پا کمتر از ۳۰ مجاز نیست")
    .max(50, "سایز پا بیشتر از ۵۰  مجاز نیست"),
  weight: z.number({ required_error: "فیلد وزن خالی است" }),
  feetSize: z
    .number()
    .min(30, "سایز کفش کمتر از ۳۰ مجاز نیست")
    .max(50, "سایز کفش بیشتر از ۵۰  مجاز نیست"),
});

function UploadFoot() {
  const route = useRouter();
  const [footSize, setFootSize] = useState<string>();
  const [errors, setErrors] = useState<boolean>(true);
  const footLenght = useRef();
  const weight = useRef<string>();
  const knees = useRef();
  function checkValidate(): boolean {
    const validatedFields = schema.safeParse({
      footlength: Number(localStorage.getItem("feetLenght")),
      weight: Number(localStorage.getItem("weight")),
      feetSize: Number(localStorage.getItem("feetSize")),
    });
    if (!validatedFields.success) {
      setErrors(true);
      message.error(validatedFields.error.flatten().fieldErrors.feetSize);
      message.error(validatedFields.error.flatten().fieldErrors.footlength);
      message.error(validatedFields.error.flatten().fieldErrors.weight);
      return false;
    } else {
      setErrors(false);
      return true;
    }
  }
  return (
    <div className="bg-white-primary my-3 rounded-lg p-5 flex flex-col gap-5">
      <span dir="rtl" className="">
        ۱. سایز پا
      </span>
      <div className="flex flex-col justify-center items-center gap-3">
        <Image src={footwear} alt={"footwear"} />
        <input
          type="range"
          min={30}
          max={50}
          onChange={(e) => {
            setFootSize(e.target.value);
            if (typeof window !== "undefined") {
              localStorage.setItem("feetLenght", e.target.value);
            }
          }}
          value={footSize}
        />
        <p dir="rtl" className="text-sm flex justify-center gap-2">
          <span>{footSize}</span>
          <span>سانتی متر</span>
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <Input
          label="وزن بدن"
          onChange={(e) => {
            weight.current = e.target.value;
            if (typeof window !== "undefined") {
              localStorage.setItem("weight", e.target.value);
            }
          }}
        />
        <Input
          label="سایز کفش"
          onChange={(e) => {
            if (typeof window !== "undefined") {
              localStorage.setItem("feetSize", e.target.value);
            }
          }}
          min={30}
          max={50}
        />
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
      <button
        className={` ${
          errors ? "bg-primary" : "bg-primary-3"
        } text-white p-3 rounded-lg w-20 flex justify-center`}
        onClick={() => {
          if (checkValidate()) {
            route.push("/newOrder/identify");
          }
        }}
      >
        بعدی
      </button>
    </div>
  );
}

function RightFoot() {
  const front = useRef<string>();
  const back = useRef<string>();
  const up = useRef<string>();
  const inside = useRef<string>();
  if (front && back && up && inside) {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "rightFoot",
        JSON.stringify({
          front: front,
          back: back,
          up: up,
          inside: inside,
        })
      );
    }
  }
  return (
    <div className="grid justify-center align-middle grid-cols-2 gap-2 lg:grid-cols-4">
      <FileInput
        imgTitle="right-front"
        setImage={front.current}
        label="زاویه جلو"
      />
      <FileInput
        imgTitle="right-back"
        setImage={back.current}
        label="زاویه پشت"
      />
      <FileInput
        imgTitle="right-up"
        setImage={up.current}
        label="زاویه بالایی"
      />
      <FileInput
        imgTitle="right-inside"
        setImage={inside.current}
        label="زاویه داخل"
      />
    </div>
  );
}

function LeftFoot() {
  const front = useRef<string>();
  const back = useRef<string>();
  const up = useRef<string>();
  const inside = useRef<string>();
  if (front && back && up && inside) {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "leftFoot",
        JSON.stringify({
          front: front,
          back: back,
          up: up,
          inside: inside,
        })
      );
    }
  }
  return (
    <div className="grid justify-center align-middle grid-cols-2 gap-2 lg:grid-cols-4">
      <FileInput
        imgTitle="left-front"
        setImage={front.current}
        label="زاویه جلو"
      />
      <FileInput
        imgTitle="left-back"
        setImage={back.current}
        label="زاویه پشت"
      />
      <FileInput
        imgTitle="left-up"
        setImage={up.current}
        label="زاویه بالایی"
      />
      <FileInput
        imgTitle="left-inside"
        setImage={inside.current}
        label="زاویه داخل"
      />
    </div>
  );
}

function Knees() {
  const front = useRef<string>();
  const back = useRef<string>();
  useEffect(() => {
    if (
      (front.current?.length as number) > 0 &&
      (back.current?.length as number) > 0
    ) {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "knees",
          JSON.stringify({
            front: front,
            back: back,
          })
        );
      }
    }
  }, [front, back]);

  return (
    <div className="grid justify-center align-middle grid-cols-2 gap-2 lg:grid-cols-4">
      <FileInput
        imgTitle="knees-front"
        setImage={front.current}
        label="زاویه جلو"
      />
      <FileInput
        imgTitle="knees-back"
        setImage={back.current}
        label="زاویه پشت"
      />
    </div>
  );
}

export default UploadFoot;
