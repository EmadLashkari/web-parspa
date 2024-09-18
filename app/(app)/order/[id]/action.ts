"use server";

import { fetchData } from "@/utils/fetch";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IBaseOrder } from "./types";

export async function getOrderDetails(
  id: number
): Promise<IBaseOrder | { message: string }> {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/login");
  }
  const response = await fetchData(
    `orders/${id}`,
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    (status) => {
      return {
        message: "دریافت اطلاعات با خطا مواجه شد!",
      };
    },
    (data) => {
      console.log(data);
      return data;
    }
  );
  return response.order;
}
