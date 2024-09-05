import { Home, Profile, Shop } from "iconsax-react";
import React, { ReactNode } from "react";

function Navigation() {
  return (
    <section className=" w-[90%] bg-white p-3 rounded-2xl lg:hidden">
      <div className="w-full flex flex-row justify-around items-center">
        <NavBtn icon={<Profile size="20" color="#28bcbe" />} />
        <NavBtn icon={<Home size="20" color="#28bcbe" />} />
        <NavBtn icon={<Shop size="20" color="#28bcbe" />} />
      </div>
    </section>
  );
}

function NavBtn({ icon }: { icon: ReactNode }) {
  return (
    <button className="flex flex-col justify-center items-center">
      {icon}
      <span></span>
    </button>
  );
}

export default Navigation;
