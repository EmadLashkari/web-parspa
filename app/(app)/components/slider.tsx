"use client";
import React, { useEffect, useState } from "react";
import hellSpur from "@/public/image/hell-spur.png";
import knock from "@/public/image/ALLUX-VALGUS.png";
import bowleg from "@/public/image/pa-parantecies.jpg";
import bun from "@/public/image/pa-zarbdari.jpg";
import backpain from "@/public/image/back-pain.jpg";
import walking from "@/public/image/fatigue-walking.png";
import ankle from "@/public/image/pichkhordegi.jpg";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Modal } from "antd";

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
export default function CardSlider() {
  const dragX = useMotionValue(0);
  const [show, setShow] = useState(0);
  const [cardData, setCardData] = useState<CardItem[]>(CardDate);
  useEffect(() => {
    const x = dragX.get();

    const intervalRef = setInterval(() => {
      if (x == 0) {
        setShow((pv) => {
          if (pv === cardData.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, 7000);
    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    console.log(x);
    if (x >= 50 && show < CardDate.length - 1) {
      setShow((pv) => pv + 1);
    } else if (x <= 50 && show > 0) {
      setShow((pv) => pv - 1);
    }
  };
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div className="w-full h-auto px-3 bg-primary bg-opacity-15 rounded-xl relative">
      {cardData ? (
        cardData.map((item, index) => {
          return (
            <div key={index}>
              <motion.div
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                style={{
                  x: dragX,
                }}
                onDragEnd={onDragEnd}
                className="cursor-grab active:cursor-grabbing flex flex-row-reverse justify-start items-center"
              >
                <motion.div
                  initial={{ opacity: 0, x: 3 }}
                  animate={{
                    opacity: index === show ? 1 : 0,
                    x: index === show ? 0 : 3,
                  }}
                  className={`w-40 h-24  md:w-36 md:h-28 flex flex-row justify-center  items-start  transition-all ease-out ${
                    index === show ? "block" : "hidden"
                  }`}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
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
                  className={`p-4 md:p-6 w-full text-xs md:text-sm flex flex-col gap-2 ${
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
                    className="text-primary "
                  >
                    مشاهده بیشتر
                  </span>
                  {/* <QuoteDown size={10} variant="Bold" className="inline m-1" /> */}
                </motion.p>
              </motion.div>
            </div>
          );
        })
      ) : (
        <div>درخواستی برای شما ثبت نشده !</div>
      )}
      <div className=" flex flex-row-reverse justify-center items-center gap-2 pb-2">
        {cardData.map((item, index) => (
          <button
            onClick={() => setShow(index)}
            key={item.keyItem}
            className={`w-5 h-1 px-3 py-[1px] pb-1 ${
              show === index ? "bg-primary" : "bg-primary bg-opacity-15"
            } rounded-lg `}
          ></button>
        ))}
      </div>
    </div>
  );
}
