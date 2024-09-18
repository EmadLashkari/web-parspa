"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import pending from "@/public/image/timelapse.svg";
import moment from "jalali-moment";
import { DirectNotification } from "iconsax-react";
import Loading from "@/components/tools/loading/loading";

type OrderItemType = {
  concerns: number[];
  created: number;
  feetLength: number;
  feetSize: number;
  id: number;
  isNew: boolean;
  notes: string;
  state: string;
  weight: number;
  insole?: {
    count: number;
  };
};

export default function List({ data }: { data?: OrderItemType[] }) {
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  const router = useRouter();
  console.log(data);
  if (token) {
    return (
      <div className="w-full flex flex-col gap-3 h-full">
        {data ? (
          data.map((item) => {
            const time = new Date(item.created);
            const jalaliDate = moment(time).locale("fa").format("jDD jMMMM");
            switch (item.state) {
              case "PROCESSING":
                return (
                  <OrderItems
                    text="درحال پردازش اطلاعات ..."
                    img={pending}
                    item={item}
                    jalaliDate={jalaliDate}
                    count={item.insole?.count}
                  />
                );
              case "ERROR_RESEND":
                return (
                  <OrderItems
                    text="خطا! برای مشاهده کلیک کنید"
                    img={pending}
                    item={item}
                    jalaliDate={jalaliDate}
                    count={item.insole?.count}
                  />
                );
              case "DOCTOR_RESPONSE":
                return (
                  <OrderItems
                    text="خطا! برای مشاهده کلیک کنید"
                    img={pending}
                    item={item}
                    jalaliDate={jalaliDate}
                    count={item.insole?.count}
                  />
                );
              case "IN_PRODUCTION":
                return (
                  <OrderItems
                    text="در مرحله طراحی و تولید کفی"
                    img={pending}
                    item={item}
                    jalaliDate={jalaliDate}
                    count={item.insole?.count}
                  />
                );
              case "SENDING":
                return (
                  <OrderItems
                    text="به مقصد شما ارسال شد"
                    img={pending}
                    item={item}
                    jalaliDate={jalaliDate}
                    count={item.insole?.count}
                  />
                );
              case "DELIVERED":
                return (
                  <OrderItems
                    text="توسط شما دریافت شد"
                    img={pending}
                    item={item}
                    jalaliDate={jalaliDate}
                    count={item.insole?.count}
                  />
                );
              default:
                return <div></div>;
            }
          })
        ) : (
          <section className="flex flex-row justify-center items-center p-5">
            {/* <Loading /> */}
            <span>
              کاربر گرامی لیست سفارش های شما خالی است لطفا آنالیز جدید ایجاد
              کنید
            </span>
          </section>
        )}
      </div>
    );
  } else {
    router.push("/login");
  }
}

function OrderItems({
  item,
  jalaliDate,
  img,
  text,
  count,
}: {
  item: OrderItemType;
  jalaliDate: string;
  img: any;
  text: string;
  count?: number;
}) {
  return (
    <Link
      key={item.id}
      href={`/order/${item.id}`}
      className="flex flex-row-reverse justify-between items-center gap-3 w-full"
    >
      <section className="w-full flex flex-row-reverse justify-between items-center gap-2 bg-primary bg-opacity-20 rounded-3xl p-3">
        <div className="flex flex-row-reverse justify-center items-center gap-2">
          <Image src={img} alt="" width={10} height={10} className="w-8 h-8" />
          <div className="flex flex-col md:flex-row-reverse md:justify-center md:items-center md:gap-10">
            <span dir="rtl" className="font-bold text-wrap px-1">
              {text}
            </span>
            <span
              dir="rtl"
              className="text-xs text-tx-primary"
            >{`(${jalaliDate})`}</span>
          </div>
        </div>
        <section>
          {count && (
            <div>
              <span className="text-red-error">{count}</span>
              <span className="text-red-error">X</span>
            </div>
          )}
        </section>
      </section>

      <section className="relative bg-primary bg-opacity-20 rounded-3xl p-5">
        <DirectNotification
          size={25}
          variant="Outline"
          color={item.isNew ? "#104242" : "#28BCBE"}
        />
        <div
          className={`p-[5px] absolute rounded-full top-0 right-0 ${
            item.isNew && "bg-primary"
          }`}
        ></div>
      </section>
    </Link>
  );
}
