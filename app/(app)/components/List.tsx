"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import pending from "@/public/image/timelapse.svg";
import moment from "jalali-moment";

export default function List({
  data,
}: {
  data?: {
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
}) {
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  const router = useRouter();
  if (token) {
    return (
      <div className="w-full flex flex-col gap-3">
        <div className="bg-primary-2 bg-opacity-60 text-white flex flex-row-reverse justify-between items-center rounded-lg p-3 w-full">
          <span></span>
          <span>وضعیت</span>
          <span>تاریخ</span>
          <span>جزییات</span>
        </div>
        {data ? (
          data.map((item) => {
            switch (item.state) {
              case "PROCESSING":
                const time = new Date(item.created);
                const jalaliDate = moment(time)
                  .locale("fa")
                  .format("jDD jMMMM");
                return (
                  <div
                    key={item.id}
                    className="bg-primary bg-opacity-20 lg:bg-secondary  flex flex-row-reverse justify-between items-center rounded-lg p-3 w-full"
                  >
                    <Image src={pending} alt="" className="w-6 h-6" />
                    <span className="text-sm">درحال برسی</span>
                    <span
                      dir="rtl"
                      className="text-xs text-tx-primary"
                    >{`(${jalaliDate})`}</span>
                    <Link
                      className="text-primary text-sm"
                      href={`/order/${item.id}`}
                    >
                      بیشتر
                    </Link>
                  </div>
                );
              default:
                return <div></div>;
            }
          })
        ) : (
          <div></div>
        )}
      </div>
    );
  } else {
    router.push("/login");
  }
}
