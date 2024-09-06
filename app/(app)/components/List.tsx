"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import pending from "@/public/image/timelapse.svg";

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
        <div className="bg-white flex flex-row-reverse justify-between items-center rounded-lg p-3 w-full">
          <Image src={pending} alt="" className="w-6 h-6" />
          <span>وضعیت</span>
          <span>تاریخ</span>
          <span></span>
        </div>
        {data ? (
          data.map((item) => {
            switch (item.state) {
              case "PROCESSING":
                const time = new Date(item.created);
                return (
                  <div
                    key={item.id}
                    className="bg-white lg:bg-secondary  flex flex-row-reverse justify-between items-center rounded-lg p-3 w-full"
                  >
                    <Image src={pending} alt="" className="w-6 h-6" />
                    <span className="text-sm">درحال برسی</span>
                    <span className="text-sm">{`${time.getFullYear()}/${time.getMonth()}/${time.getDay()}`}</span>
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
