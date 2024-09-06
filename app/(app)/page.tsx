"use client";
import Image from "next/image";
import doctor from "@/public/image/bowlegs.png";
import { QuoteDown, QuoteUp } from "iconsax-react";
import Link from "next/link";
import List from "./components/List";
import React, { useEffect, useRef, useState } from "react";
import hellSpur from "@/public/image/hell-spur.png";
import knock from "@/public/image/ALLUX-VALGUS.png";
import bowleg from "@/public/image/pa-parantecies.jpg";
import bun from "@/public/image/pa-zarbdari.jpg";
import backpain from "@/public/image/back-pain.jpg";
import walking from "@/public/image/fatigue-walking.png";
import ankle from "@/public/image/pichkhordegi.jpg";
import { Carousel } from "antd";
import { fetchData } from "@/utils/fetch";
import { useRouter } from "next/navigation";
import getHeaders from "@/utils/getHeaders";

type CardItem = {
  title: string;
  description: string;
  img: any;
  open?: boolean;
  keyItem?: number;
};

const CardDate: CardItem[] = [
  {
    title: "خار پاشنه",
    description:
      "اختلال در صافی کف پا می‌تواند فشار بیشتری را به کف پا وارد کند، به خصوص به ناحیه پاشنه. این فشار اضافی می‌تواند منجر به ایجاد خار پاشنه شود، که در آن توده‌ای از استخوان در قسمت زیرین پاشنه شکل می‌گیرد و باعث درد و ناراحتی در هنگام راه رفتن می‌شود.",
    img: hellSpur,
    open: false,
  },
  {
    title: "انحراف شست پا (هالوس والگوس)",
    description:
      "اختلال در صافی کف پا باعث می‌شود که توزیع فشار در پاها به درستی انجام نشود. این وضعیت می‌تواند منجر به انحراف شست پا به سمت بیرون (هالوس والگوس) شود، که باعث تغییر شکل و درد در ناحیه انگشت شست پا می‌شود.",
    img: knock,
    open: true,
  },
  {
    title: "زانو پرانتزی (ژنوواروم)",
    description:
      "اختلال در قوس کف پا به خصوص قوس بیش از حد آن (  pes cavous foot )‌میتواند باعث تغییراتی در ساختار پا شود که منجر به انحراف زانو به بیرون (زانو پرانتزی) می‌شود. این وضعیت می‌تواند به درد و اسیب در ناحیه زانو منجر می شود.",
    img: bowleg,
    open: true,
  },
  {
    title: "زانو ضربدری (ژنووالگوم)",
    description:
      " کاهش قوس کف پا یا صافی آن می‌تواند به تغییراتی در الگوی حرکت پا و زانو منجر شود. این وضعیت می‌تواند باعث انحراف زانوها به سمت داخل (زانو ضربدری) شود که منجر به درد و افزایش خطر آسیب به زانوها می‌گردد.",
    img: bun,
    open: true,
  },
  {
    title: "کمردرد",
    description:
      "اختلال در قوس کف پا می‌تواند به تغییرات در راستای ستون فقرات و فشار اضافی به کمر منجر شود. این تغییرات می‌توانند علت ایجاد کمردرد و ناراحتی‌های مرتبط با آن باشند.",
    img: backpain,
    open: true,
  },
  {
    title: "خستگی زودرس هنگام قدم زدن",
    description:
      "با کاهش یا افزایش قوس کف پا محور تعادل اسکلت دچار ناترازی گشته و این مسئله فشار بیشتری به عضلات و مفاصل وارد میکند که این فشار باعث‌خستگی زودرس هنگام راه رفتن میشود",
    img: walking,
    open: true,
  },
  {
    title: "پیچ خوردگی مکرر مچ پا",
    description:
      "اختلال در قوس کف پا می‌تواند تعادل و ثبات پا را در ناحیه مفصل مچ تغییر داده و باعث افزایش ریسک پیچ خوردگی و آسیب دیدگی آن شود.",
    img: ankle,
    open: true,
  },
];
type orderData = {
  concerns: number[];
  created: number;
  feetLength: number;
  feetSize: number;
  id: number;
  isNew: boolean;
  notes: string;
  state: string;
  weight: number;
}[];
export default function Home() {
  const router = useRouter();
  const [show, setShow] = useState(0);
  const list = useRef<orderData>();

  const token = typeof window !== "undefined" && localStorage.getItem("token");
  if (!token) {
    router.push("/login");
  }
  setTimeout(() => {
    if (show >= CardDate.length) {
      setShow(0);
    } else {
      setShow(show + 1);
    }
  }, 5000);
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  useEffect(() => {
    fetchData("/orders", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        origin: getHeaders(),
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res)
      .then((data) => {
        list.current = data.orders;
        console.log(list.current);
      });
  }, []);
  return (
    <main className="w-full h-full flex flex-col justify-start items-center py-10 px-4 gap-10 rounded-xl lg:bg-white lg:w-[73%] lg:h-[80%]">
      <section className="w-full bg-primary bg-opacity-15 rounded-xl flex flex-row justify-between items-center">
        {CardDate.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={`w-full h-full relative pl-3 transition-all ease-out ${
                  index === show ? "block" : "hidden"
                }`}
              >
                <Image
                  src={item.img}
                  alt="doctor"
                  className="absolute left-5 bottom-1/2 translate-y-1/2 w-20 h-20 rounded-lg"
                />
              </div>
              <p
                dir="rtl"
                className={`p-6 text-sm ${index === show ? "block" : "hidden"}`}
              >
                <QuoteUp size={10} variant="Bold" className="inline m-1" />
                {item.description}
                <QuoteDown size={10} variant="Bold" className="inline m-1" />
              </p>
            </>
          );
        })}
      </section>
      <div className="w-full flex flex-row-reverse justify-between items-center">
        <span>آنالیز های ثبت شده</span>
        <Link
          href={"/newOrder"}
          className="p-2 rounded-xl bg-primary text-white "
        >
          شروع آنالیز
        </Link>
      </div>
      <section className="w-full p-5 flex flex-col justify-center items-center gap-20">
        <List data={list.current} />
      </section>
    </main>
  );
}
