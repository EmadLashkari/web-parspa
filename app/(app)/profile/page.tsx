import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Avatar from "@/public/image/Avatar.svg";
import { fetchProfile } from "./action";
import Form from "./form";

type profileType = {
  address?: string;
  appNotify?: boolean;
  birthday?: string;
  email?: string;
  gender?: number;
  name?: string;
  phone: string;
  smsNotify?: boolean;
};

export default async function Profile() {
  const profile = await fetchProfile();
  return (
    <div className="bg-white m-3 p-4 w-[90%] lg:w-[70%] lg:h-[85%] rounded-xl flex flex-col justify-start items-center">
      <section>
        <Image src={Avatar} alt="profile avatar" className="w-24 h-24" />
      </section>
      <Form data={profile as profileType} />
    </div>
  );
}
