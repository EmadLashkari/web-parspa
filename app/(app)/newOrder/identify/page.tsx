import React from "react";
import Steps from "../components/Steps";
import fillQa from "@/public/image/fillQA.png";
import TextArea from "@/components/tools/input/TextArea";

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

export default function identify() {
  return (
    <div className="w-full h-full bg-white p-3 overflow-scroll flex flex-col gap-3">
      <Steps image={fillQa} label="پاسخ به سوالات" />
      <div dir="rtl" className="bg-secondary rounded-lg flex flex-col ">
        <span className="p-3 font-bold">مشکلات پا خود را شناسایی کنید</span>
        <div>
          {identifyFoot.map((item) => {
            return <InputCheck key={item.id} label={item.text} />;
          })}
        </div>
      </div>
      <TextArea label="یادداشت ها" props={{}} />
    </div>
  );
}

function InputCheck({ label }: { label: string }) {
  return (
    <div className="flex flex-row gap-3 bg-white m-2 p-2 rounded-lg">
      <input type="checkbox" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
