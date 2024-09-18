"use server";
import { fetchData } from "@/utils/fetch";
import { cookies } from "next/headers";
import { orderData } from "./types";
import { redirect } from "next/navigation";

export async function getOrders(): Promise<orderData | { message: string }> {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/login");
  }
  const response = await fetchData(
    "orders",
    {
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
    (status) => {
      return {
        message: "دریافت اطلاعات با خطا مواجه شد",
      };
    },
    (data) => {
      return data;
    }
  );
  return response.orders;
}
