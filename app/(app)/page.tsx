import { AddCircle } from "iconsax-react";
import Link from "next/link";
import List from "./components/List";
import React from "react";
import CardSlider from "./components/slider";
import { getOrders } from "./components/action";
import { orderData } from "./components/types";

export default async function Home() {
  const list = await getOrders();

  return (
    <main className="w-full h-full flex flex-col justify-start items-center pb-1 pt-3 md:pt-10 px-4 gap-3 rounded-xl lg:bg-white lg:w-[73%] lg:h-[90%]">
      <CardSlider />
      <div className="w-full pt-5 gap-3 flex flex-row-reverse justify-between items-center">
        <span className="font-bold text-lg">آنالیز های ثبت شده</span>
        <Link
          href={"/newOrder"}
          className="p-2 rounded-xl bg-primary text-white text-sm flex flex-row-reverse gap-2 justify-center items-center"
        >
          <span className="font-bold">شروع آنالیز</span>
          <AddCircle size={20} variant="Outline" />
        </Link>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center overflow-scroll">
        <List data={list as orderData} />
      </div>
    </main>
  );
}
