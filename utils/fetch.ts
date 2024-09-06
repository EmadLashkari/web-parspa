"use client";
import axios, { AxiosRequestConfig } from "axios";
import getHeaders from "./getHeaders";

const axiosInstance = axios.create({
  baseURL: "https://api.parspa-ai.ir",
  headers: {
    "Content-Type": "application/json",
    origin: getHeaders(),
    // Add all custom headers here
  },
});

export const fetchData = async (
  url: string,
  options: AxiosRequestConfig<any> | undefined = {}
) => {
  try {
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};
