"use client";
import React, { useRef, useState } from "react";
import { profileType, stateProp } from "./types";
import Input from "@/components/tools/input/Input";
import Select from "@/components/tools/input/Select";
import TextArea from "@/components/tools/input/TextArea";
import DragCloseDrawer from "@/components/tools/modal/BottomModal";
import { Spin } from "antd";
import Cookies from "js-cookie";
import { z } from "zod";
import { fetchData } from "@/utils/fetch";
import { formDataToJson } from "@/utils/formDataToJson";

const schema = z.object({
  name: z.string().min(2, "نام کمتر از ۲ کاراکتر مجاز نیست"),
  email: z
    .string({ invalid_type_error: "ایمیل صحیح نیست" })
    .email("ایمیل وارد شده صحیح نیست"),
  birthday: z.string(),
  phone: z.string().min(11, "شماره همراه باید ۱۱ رقم باشد"),
  address: z.string(),
});

export default function Form({ data }: { data: profileType }) {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const profile = useRef(data);
  const [errors, setErrors] = useState<stateProp["errors"]>();
  async function updateProfile(formData: FormData) {
    const validatedFields = schema.safeParse({
      email: formData.get("email"),
      name: formData.get("name"),
      birthday: formData.get("birthday"),
      gender: formData.get("gender"),
      phone: formData.get("phone"),
      smsNotify: formData.get("smsNotify"),
      address: formData.get("address"),
      appNotify: formData.get("appNotify"),
    });
    if (!validatedFields.success) {
      setErrors(validatedFields.error.flatten().fieldErrors);
    } else {
      const token = Cookies.get("token");
      console.log(token);
      if (!token) {
        return {
          message: "شما وارد سیستم نشده اید",
        };
      }
      try {
        setLoading(true);
        await fetchData(
          "user/profile",
          {
            method: "put",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: formDataToJson(formData),
          },
          (status) => {
            console.log(status);
            setLoading(false);
          },
          (data) => {
            if (data) {
              console.log(data);
              setLoading(false);
            }
          }
        );
      } catch (error) {
        setLoading(false);
        console.error(error);
        return {
          message: "خطا در ارسال اطلاعات !",
        };
      }
    }
  }
  const [birthdayDate, setBirthdayDate] = useState<{
    year?: string;
    month?: string;
    day?: string;
  }>();
  return (
    <>
      <form
        action={updateProfile}
        className="pt-10 flex flex-col justify-center items-center lg:grid grid-cols-2 gap-7 w-full"
      >
        <Input
          type="text"
          name="name"
          placeholder={profile.current?.name}
          label="نام و نام خانوادگی"
          error={errors?.name}
        />
        <Input
          type="email"
          name="email"
          dir="ltr"
          placeholder={profile.current?.email}
          label="ایمیل"
          error={errors?.email}
        />
        <div className="flex flex-row justify-center items-center gap-2 w-full ">
          <Select
            name="gender"
            dir="rtl"
            label="جنسیت"
            options={[
              { value: "0", name: "مرد" },
              { value: "1", name: "زن" },
            ]}
          />
          <Input
            type="text"
            name="birthday"
            readOnly
            onClick={() => {
              setOpenModal(true);
            }}
            placeholder={profile.current?.birthday}
            value={
              birthdayDate &&
              `${birthdayDate?.day ?? ""}/${birthdayDate?.month ?? ""}/${
                birthdayDate?.year ?? ""
              }`
            }
            label="تاریخ تولد"
            error={errors?.birthday}
          />
        </div>
        <Input
          name="phone"
          type="text"
          dir="ltr"
          maxLength={11}
          value={profile.current?.phone}
          label="شماره همراه"
          error={errors?.birthday}
        />
        <TextArea
          label="آدرس"
          name="address"
          placeholder={profile.current?.address}
          error={errors?.address}
        />
        <Spin spinning={loading}>
          <button
            type="submit"
            className="w-full p-3 bg-primary text-white rounded-xl font-bold "
          >
            ذخیره
          </button>
        </Spin>
      </form>
      <DragCloseDrawer open={openModal} setOpen={setOpenModal}>
        <div className="flex flex-row justify-around items-center p-1 md:p-5 gap-3">
          <Select
            dir="rtl"
            label="روز"
            options={Array.from({ length: 31 }, (_, i) => ({
              name: new Intl.DateTimeFormat("fa-IR", { day: "numeric" }).format(
                new Date(2024, 5, i)
              ),
              value: new Intl.DateTimeFormat("en-US", {
                day: "numeric",
              }).format(new Date(2024, 5, i)),
            }))}
            onChange={(e) => {
              setBirthdayDate((prev) => ({
                ...prev,
                ...{ day: e.target.value },
              }));
            }}
          />
          <Select
            dir="rtl"
            label="ماه"
            options={Array.from({ length: 12 }, (_, i) => ({
              name: new Intl.DateTimeFormat("fa-IR", { month: "short" }).format(
                new Date(2024, i, 10)
              ),
              value: new Intl.DateTimeFormat("en-US", {
                month: "numeric",
              }).format(new Date(2024, i, 10)),
            }))}
            onChange={(e) => {
              setBirthdayDate((prev) => ({
                ...prev,
                ...{ month: e.target.value },
              }));
            }}
          />
          <Select
            dir="rtl"
            label="سال"
            options={Array.from({ length: 100 }, (_, i) => ({
              name: new Intl.DateTimeFormat("fa-IR", {
                year: "numeric",
                calendar: "persian",
              }).format(new Date().setFullYear(new Date().getFullYear() - i)),
              value: new Intl.DateTimeFormat("en-US", {
                year: "numeric",
              }).format(new Date().setFullYear(new Date().getFullYear() - i)),
            }))}
            onChange={(e) => {
              setBirthdayDate((prev) => ({
                ...prev,
                ...{ year: e.target.value },
              }));
              console.log(e.target.value);
            }}
          />
        </div>
      </DragCloseDrawer>
    </>
  );
}
