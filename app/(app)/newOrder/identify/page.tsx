"use client";
import React, { useRef } from "react";
import Steps from "../components/Steps";
import fillQa from "@/public/image/fillQA.png";
import TextArea from "@/components/tools/input/TextArea";
import { fetchData } from "@/utils/fetch";
import Link from "next/link";
import { Modal } from "antd";
import { useRouter } from "next/navigation";

const identifyFoot = [
  {
    id: 1,
    text: "صبح ها درد پاشنه دارم",
  },
  {
    id: 2,
    text: "کف پاهایم کم قوس یا بدون قوس است",
  },
  {
    id: 3,
    text: "در پایه انگشت پایم برآمدگی استخوانی دارم",
  },
  {
    id: 4,
    text: "هنگام راه رفتن درد شدید پاشنه دارم",
  },
  {
    id: 5,
    text: "در کف پایم درد دارم",
  },
  {
    id: 6,
    text: "بین انگشتانم درد سوزشی احساس میکنم",
  },
  {
    id: 7,
    text: "در پشت پاشنه پا ساق پاهایم درد دارم",
  },
];

export default function Identify() {
  const route = useRouter();
  const checkedBox = useRef<number[]>([]);
  const notes = useRef<string>();
  const token = localStorage.getItem("token");
  function sendOrder() {
    try {
      const res = fetchData("/orders/new", {
        method: "post",
        headers: {
          origin: location.hostname ?? "",
          Authorization: `Bearer ${token}`,
        },
        data: {
          concerns: checkedBox.current,
          feetLength: localStorage.getItem("feetLenght"),
          feetSize: localStorage.getItem("feetSize"),
          images: {
            KNEES: {
              BACK: localStorage.getItem("knees-back"),
              FRONT: localStorage.getItem("knees-front"),
            },
            RIGHT: {
              UPSIDE: localStorage.getItem("right-up"),
              BACK: localStorage.getItem("right-back"),
              FRONT: localStorage.getItem("right-front"),
              INSIDE: localStorage.getItem("right-inside"),
            },
            LEFT: {
              UPSIDE: localStorage.getItem("left-up"),
              BACK: localStorage.getItem("left-back"),
              FRONT: localStorage.getItem("left-front"),
              INSIDE: localStorage.getItem("left-inside"),
            },
          },
          notes: notes.current,
          weight: localStorage.getItem("weight"),
        },
      })
        .then((res) => {
          return res;
        })
        .then((data) => {
          console.log(data);
          Modal.success({
            content: "درخواست شما  با موفقیت ثبت شد",
            direction: "rtl",
            onOk: () => {
              route.push("/");
            },
          });
          return data;
        });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="w-full h-full bg-white p-3 overflow-scroll flex flex-col gap-3">
      <Steps image={fillQa} label="پاسخ به سوالات" />
      <div dir="rtl" className="bg-secondary rounded-lg flex flex-col ">
        <span className="p-3 font-bold">مشکلات پا خود را شناسایی کنید</span>
        <div>
          {identifyFoot.map((item) => {
            return (
              <InputCheck
                props={{
                  onChange: (e) => {
                    if (e.target.checked) {
                      checkedBox.current = [...checkedBox.current, item.id];
                      console.log(checkedBox.current);
                    }
                  },
                }}
                key={item.id}
                label={item.text}
              />
            );
          })}
        </div>
      </div>
      <TextArea
        label="یادداشت ها"
        props={{
          onChange: (e) => {
            notes.current = e.target.value;
          },
        }}
      />
      <div className="flex justify-between gap-4">
        <button
          onClick={sendOrder}
          className="flex justify-center p-2 bg-primary text-white rounded-lg"
        >
          ارسال
        </button>
        <Link
          href={"/newOrder"}
          className="flex justify-center p-2 bg-primary text-white rounded-lg"
        >
          برگشت
        </Link>
      </div>
    </div>
  );
}

function InputCheck({
  label,
  props,
}: {
  label: string;
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}) {
  return (
    <div className="flex flex-row gap-3 bg-white m-2 p-2 rounded-lg">
      <input {...props} type="checkbox" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
