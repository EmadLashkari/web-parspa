import {
  ArrowRight,
  Back,
  Direct,
  Logout,
  Profile,
  ShoppingCart,
} from "iconsax-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import Logo from "@/public/image/Logo.svg";
import Image from "next/image";
import SupportAgent from "@/public/image/support_agent.svg";
import Support from "@/public/icons/Support";
function Sidebar() {
  return (
    <section className="hidden lg:flex w-[20rem] h-full flex-col gap-5 px-5 ">
      <button className="bg-white p-5 rounded-lg text-xs text-nowrap flex flex-row justify-center items-center gap-4">
        <span> بازگشت به صفحه اصلی</span>
        <ArrowRight size={20} />
      </button>
      <section className="bg-white p-5 w-full h-[70%] rounded-lg flex flex-col justify-start items-center  gap-3 shadow-white-primary shadow-md">
        <Image className="w-20 h-20" src={Logo} alt="logo" />
        <Item url="/" icon={<Direct size={20} />} text="داشبورد" />
        <Item
          url="/newOrder"
          icon={<ShoppingCart size={20} />}
          text="درخواست ها"
        />
        <Item url="/profile" icon={<Profile size={20} />} text="پروفایل" />
        <Item
          url="/support"
          icon={<Support className="hover:text-white" />}
          text="پشتیبانی"
        />
        <Item url="" icon={<Logout size={20} />} text="خروج" />
      </section>
    </section>
  );
}

function Item({
  url,
  icon,
  text,
}: {
  url: string;
  icon: ReactNode;
  text: string;
}) {
  return (
    <Link
      href={url}
      className="w-full flex flex-row justify-end items-center hover:bg-primary hover:text-white gap-3 border text-primary border-primary px-5 py-2 rounded-lg "
    >
      <span className="text-sm">{text}</span>
      {icon}
    </Link>
  );
}

export default Sidebar;
