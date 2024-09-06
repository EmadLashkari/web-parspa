import type { Metadata } from "next";
import { IranYekan } from "@/utils/fonts";
import "./globals.css";
import MainLayoutWrapper from "@/components/layout/MainLayoutWrapper";

export const metadata: Metadata = {
  title: "پارس پا وب",
  description: "پارس پا وب اپ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={IranYekan.className}>{children}</body>
    </html>
  );
}
