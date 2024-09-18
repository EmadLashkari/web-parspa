"use server";

import { fetchData } from "@/utils/fetch";
import { cookies } from "next/headers";
import { profileType, stateProp } from "./types";
import { z } from "zod";
import { formDataToJson } from "@/utils/formDataToJson";
import getUrl from "@/utils/getUrl";

export async function fetchProfile(): Promise<
  profileType | { message?: string }
> {
  const token = cookies().get("token")?.value;
  if (!token) {
    return {
      message: "شما وارد سیستم نشده اید",
    };
  }
  try {
    const response = await fetchData(
      "user/profile",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
      (status) => {
        console.log(status);
        return {
          message: "خطا در دریافت اطلاعات !",
        };
      },
      (data) => {
        if (!data || !data.user) {
          return {
            message: "اطلاعات یوزر یافت نشد",
          };
        }
        return data;
      }
    );
    return response.user as profileType;
  } catch (error) {
    console.error(error);
    return {
      message: "خطا در دریافت اطلاعات !",
    };
  }
}
