"use client";
import React, { useEffect, useState } from "react";
import { IBaseOrder, IProduction } from "../types";
import doctor from "@/public/image/thank-you.png";
import Image from "next/image";
import { Collapse } from "antd";
import { fetchData } from "@/utils/fetch";
import { identifyFoot } from "@/components/data/identify";
import { ArrowRight2, Back, Backward, TickCircle } from "iconsax-react";
import Link from "next/link";
import { FootImage } from "./FootImage";

export default function Delivered({ data }: { data: IProduction }) {
  return (
    <section className="relative bg-gradient-to-b from-white-primary from-10% via-white to-100% to-primary-3 overflow-scroll">
      <Link href={"/"} className="absolute right-7 top-0">
        <ArrowRight2 color="#28BCBE" size={25} variant="Outline" />
      </Link>
      <div className="flex justify-center ">
        <Image
          src={doctor}
          alt={data.state}
          className="border-b-[1px] border-primary"
        />
      </div>
      <div className="px-14 pt-6 flex flex-col justify-center gap-4">
        <h1 dir="rtl" className="text-xl font-bold text-center">
          به مقصد شما ارسال شد
        </h1>
        <p dir="rtl" className="text-xs font-normal  text-center leading-7">
          کفی پارس پا طراحی و تولید شده و به مقصد شما ارسال شد ، زمان رسیدن به
          محصول به دست شما نسبت به فاصله شما از ما متغییر میباشد. از صبر و
          شکیبایی شما متشکریم. برای هرگونه اطلاعات بیشتر میتوانید با تیم
          پشتیبانی پارس پا در ارتباط باشید.
        </p>
      </div>
      <div dir="rtl" className="px-5 pt-5">
        <Collapse
          className="font-yekan bg-white"
          defaultActiveKey={["1"]}
          // onChange={onChange}
          expandIconPosition={"end"}
          items={[
            {
              key: "1",
              label: "پاسخ فیزیوتراپیست پارس پا",
              children: <span>{data.doctorResponse}</span>,
            },
            {
              key: "2",
              label: "مشاهده جزییات درخواست ثبت شده",
              children: <BaseOrderData data={data} />,
            },
          ]}
        />
      </div>
    </section>
  );
}

function BaseOrderData({ data }: { data: IProduction }) {
  return (
    <div>
      <Collapse
        className="font-yekan bg-white"
        defaultActiveKey={["1"]}
        // onChange={onChange}
        expandIconPosition={"end"}
        items={[
          {
            key: "1",
            label: "پای راست",
            children: (
              <div className="flex flex-row justify-around items-center">
                <FootImage
                  title="زاویه جلو"
                  feetUrl={data.images.RIGHT.FRONT}
                />
                <FootImage title="زاویه پشت" feetUrl={data.images.RIGHT.BACK} />
              </div>
            ),
          },
          {
            key: "2",
            label: "پای چپ",
            children: (
              <div className="flex flex-row justify-around items-center">
                <FootImage title="زاویه جلو" feetUrl={data.images.LEFT.FRONT} />
                <FootImage title="زاویه پشت" feetUrl={data.images.LEFT.BACK} />
              </div>
            ),
          },
          {
            key: "3",
            label: "زانو ها",
            children: (
              <div className="flex flex-row justify-around items-center">
                <FootImage
                  title="زاویه جلو"
                  feetUrl={data.images.KNEES.FRONT}
                />
                <FootImage title="زاویه پشت" feetUrl={data.images.KNEES.BACK} />
              </div>
            ),
          },
        ]}
      />
      <section>
        <div className="pt-4 font-yekan">
          <span>طول پا : </span>
          <span>
            {data.feetLength} سانتی متر &asymp;{" "}
            {(Number(data.feetLength) / 2.54).toFixed(2)} اینچ
          </span>
        </div>
        <div className="pt-4">
          <span>وزن بدن : </span>
          <span>
            {data.weight} کیلوگرم &asymp;{" "}
            {(Number(data.weight) * 2.20462).toFixed(2)} پوند
          </span>
        </div>
        <div className="pt-4">
          <span>سایز کفش : </span>
          <span>{data.feetSize}</span>
        </div>
        <div className="py-4">
          <span>مشکلات شما :</span>
          <section className="flex flex-col p-4 text-xs gap-2">
            {identifyFoot.map((item, i) => {
              if (data.concerns[item.id]) {
                return (
                  <div
                    key={i}
                    className="flex flex-row justify-start items-center gap-3"
                  >
                    <TickCircle color="#89E4E6" />
                    <span>{item.text}</span>
                  </div>
                );
              }
            })}
          </section>
        </div>
        <div>
          <span>یادداشت ها : </span>
          <span>{data.notes}</span>
        </div>
        <div className="flex flex-col pt-3">
          <span>تعداد : {data.insole.count}</span>
          <span>شماره همراه : {data.insole.phone}</span>
          <span>آدرس : {data.insole.address}</span>
        </div>
      </section>
    </div>
  );
}
