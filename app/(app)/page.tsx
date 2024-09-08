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
import { Carousel, message, Modal } from "antd";
import { fetchData } from "@/utils/fetch";
import { useRouter } from "next/navigation";
import getHeaders from "@/utils/getHeaders";
import { motion } from "framer-motion";

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
    keyItem: 0,
  },
  {
    title: "انحراف شست پا (هالوس والگوس)",
    description:
      "اختلال در صافی کف پا باعث می‌شود که توزیع فشار در پاها به درستی انجام نشود. این وضعیت می‌تواند منجر به انحراف شست پا به سمت بیرون (هالوس والگوس) شود، که باعث تغییر شکل و درد در ناحیه انگشت شست پا می‌شود.",
    img: knock,
    open: false,
    keyItem: 1,
  },
  {
    title: "زانو پرانتزی (ژنوواروم)",
    description:
      "اختلال در قوس کف پا به خصوص قوس بیش از حد آن (  pes cavous foot )‌میتواند باعث تغییراتی در ساختار پا شود که منجر به انحراف زانو به بیرون (زانو پرانتزی) می‌شود. این وضعیت می‌تواند به درد و اسیب در ناحیه زانو منجر می شود.",
    img: bowleg,
    open: false,
    keyItem: 2,
  },
  {
    title: "زانو ضربدری (ژنووالگوم)",
    description:
      " کاهش قوس کف پا یا صافی آن می‌تواند به تغییراتی در الگوی حرکت پا و زانو منجر شود. این وضعیت می‌تواند باعث انحراف زانوها به سمت داخل (زانو ضربدری) شود که منجر به درد و افزایش خطر آسیب به زانوها می‌گردد.",
    img: bun,
    open: false,
    keyItem: 3,
  },
  {
    title: "کمردرد",
    description:
      "اختلال در قوس کف پا می‌تواند به تغییرات در راستای ستون فقرات و فشار اضافی به کمر منجر شود. این تغییرات می‌توانند علت ایجاد کمردرد و ناراحتی‌های مرتبط با آن باشند.",
    img: backpain,
    open: false,
    keyItem: 4,
  },
  {
    title: "خستگی زودرس هنگام قدم زدن",
    description:
      "با کاهش یا افزایش قوس کف پا محور تعادل اسکلت دچار ناترازی گشته و این مسئله فشار بیشتری به عضلات و مفاصل وارد میکند که این فشار باعث‌خستگی زودرس هنگام راه رفتن میشود",
    img: walking,
    open: false,
    keyItem: 5,
  },
  {
    title: "پیچ خوردگی مکرر مچ پا",
    description:
      "اختلال در قوس کف پا می‌تواند تعادل و ثبات پا را در ناحیه مفصل مچ تغییر داده و باعث افزایش ریسک پیچ خوردگی و آسیب دیدگی آن شود.",
    img: ankle,
    open: false,
    keyItem: 6,
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
  const [cardData, setCardData] = useState<CardItem[]>(CardDate);

  const token = typeof window !== "undefined" && localStorage.getItem("token");
  if (!token) {
    router.push("/login");
  }
  setTimeout(() => {
    if (show == CardDate.length - 1) {
      console.log(show, CardDate.length - 1);
      setShow(0);
    } else {
      console.log(show);
      setShow(show + 1);
    }
  }, 7000);
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  useEffect(() => {
    const getOrders = async () => {
      await fetchData(
        "orders",
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        (status) => {
          message.error("دریافت اطلاعات ممکن نیست");
          console.log("error status", status);
        },
        (data) => {
          list.current = data.orders;
          console.log(list.current);
        }
      );
    };
    getOrders();
  }, []);
  return (
    <main className="w-full h-full flex flex-col justify-start items-center py-10 px-4 gap-3 rounded-xl lg:bg-white lg:w-[73%] lg:h-[90%]">
      <div className="w-full h-auto px-3 bg-primary bg-opacity-15 rounded-xl relative">
        {cardData ? (
          cardData.map((item, index) => {
            return (
              <div key={index}>
                <div className=" flex flex-row-reverse justify-start items-center">
                  <motion.div
                    initial={{ opacity: 0, x: 3 }}
                    animate={{
                      opacity: index === show ? 1 : 0,
                      x: index === show ? 0 : 3,
                    }}
                    className={`w-36 h-28 flex flex-row justify-center items-start  transition-all ease-out ${
                      index === show ? "block" : "hidden"
                    }`}
                  >
                    <Image
                      src={item.img}
                      alt="doctor"
                      className=" w-full h-full rounded-lg"
                    />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, x: 3 }}
                    animate={{
                      opacity: index === show ? 1 : 0,
                      x: index === show ? 0 : 3,
                    }}
                    transition={{ delay: 0.2 }}
                    dir="rtl"
                    className={`p-6 w-full text-sm flex flex-col gap-2 ${
                      index === show ? "block" : "hidden"
                    }`}
                  >
                    {/* <QuoteUp size={10} variant="Bold" className="inline m-1" /> */}
                    <span className="font-bold text-normal">{item.title}</span>
                    <span
                      className={`${
                        item.open ? "line-clamp-none" : "line-clamp-2"
                      } `}
                    >
                      {item.description}
                    </span>
                    <span
                      onClick={() => {
                        Modal.info({
                          title: item.title,
                          content: item.description,
                          direction: "rtl",
                          okText: "باشه",
                        });
                      }}
                      className="text-primary underline-offset-8 underline"
                    >
                      بیشتر
                    </span>
                    {/* <QuoteDown size={10} variant="Bold" className="inline m-1" /> */}
                  </motion.p>
                </div>
              </div>
            );
          })
        ) : (
          <div>درخواستی برای شما ثبت نشده !</div>
        )}
        <div className=" flex flex-row-reverse justify-center items-center gap-2 pb-2">
          {cardData.map((item, index) => (
            <span
              key={item.keyItem}
              className={`w-5 h-1 px-3 py-[1px] pb-1 ${
                show === index ? "bg-primary" : "bg-primary bg-opacity-15"
              } rounded-lg `}
            ></span>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row-reverse justify-between items-center">
        <span>آنالیز های ثبت شده</span>
        <Link
          href={"/newOrder"}
          className="p-2 rounded-xl bg-primary text-white "
        >
          شروع آنالیز
        </Link>
      </div>
      <div className="w-full p-5 flex flex-col justify-center items-center gap-20">
        <List data={list.current} />
      </div>
    </main>
  );
}
