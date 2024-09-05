import Input from "@/components/tools/input/Input";
import Image from "next/image";
import React from "react";
import Avatar from "@/public/image/Avatar.svg";
import Select from "@/components/tools/input/Select";
import TextArea from "@/components/tools/input/TextArea";

function Profile() {
  return (
    <div className="bg-white m-3 p-4 w-[90%] lg:w-[70%] lg:h-[85%] rounded-xl flex flex-col justify-start items-center">
      <section>
        <Image src={Avatar} alt="profile avatar" className="w-24 h-24" />
      </section>
      <form className="pt-10 flex flex-col justify-center items-center lg:grid grid-cols-2 gap-5 w-full">
        <Input props={{ type: "text" }} label="نام و نام خانوادگی" />
        <Input props={{ type: "email", dir: "ltr" }} label="ایمیل" />
        <div className="flex flex-row justify-center items-center gap-2 w-full ">
          <Select
            props={{ dir: "rtl" }}
            label="جنسیت"
            options={[
              { value: "men", name: "مرد" },
              { value: "women", name: "زن" },
            ]}
          />
          <Input props={{ type: "date" }} label="تاریخ تولد" />
        </div>
        <Input
          props={{ type: "text", dir: "ltr", maxLength: 11 }}
          label="شماره همراه"
        />
        <TextArea props={{}} label="آدرس" />
        <button
          type="submit"
          className="w-full p-3 bg-primary text-white rounded-xl font-bold lg:w-40"
        >
          ذخیره
        </button>
      </form>
    </div>
  );
}

export default Profile;
