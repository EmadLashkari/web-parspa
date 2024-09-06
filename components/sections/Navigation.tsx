import { Home, Profile, Shop } from "iconsax-react";
import Link from "next/link";
import React, { ReactNode } from "react";

function Navigation() {
  return (
    <section className=" w-[90%] bg-white p-3 rounded-2xl lg:hidden">
      <div className="w-full flex flex-row justify-around items-center">
        <NavBtn url="/profile" icon={<Profile size="20" color="#28bcbe" />} />
        <NavBtn url="/" icon={<Home size="20" color="#28bcbe" />} />
        <NavBtn url="/newOrder" icon={<Shop size="20" color="#28bcbe" />} />
      </div>
    </section>
  );
}

function NavBtn({ icon, url }: { icon: ReactNode; url: string }) {
  return (
    <Link href={url} className="flex flex-col justify-center items-center">
      {icon}
      <span></span>
    </Link>
  );
}

export default Navigation;
