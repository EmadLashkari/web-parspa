import Image from "next/image";
import doctor from "@/public/image/bowlegs.png";
import { QuoteDown, QuoteUp } from "iconsax-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-start items-center py-10 px-4 gap-10 rounded-xl lg:bg-white lg:w-[73%] lg:h-[80%]">
      <section className="w-full bg-primary bg-opacity-15 rounded-xl flex flex-row justify-between items-center">
        <div className="w-full h-full relative pl-3">
          <Image
            src={doctor}
            alt="doctor"
            className="absolute -bottom-1 w-36 h-36"
          />
        </div>
        <p dir="rtl" className="p-6 text-sm">
          <QuoteUp size={10} variant="Bold" className="inline m-1" />
          احساس خستگی سریع هنگام دویدن یا فعالیت های روزانه مانند پیاده روی
          <QuoteDown size={10} variant="Bold" className="inline m-1" />
        </p>
      </section>
      <section className="w-full p-5 flex flex-col justify-center items-center gap-20">
        <p className="text-center text-sm leading-8">
          برای ثبت درخواست آنالیز رایگان و یا مشاهده درخواست های گذشته وارد حساب
          کاربری خود شوید.{" "}
          <Link href={""} className="text-primary underline underline-offset-8">
            ارتباط با تیم پشتیبانی
          </Link>
        </p>
        <button className="bg-primary font-bold rounded-xl text-white py-2 px-5">
          ورود به حساب کاربری
        </button>
      </section>
    </main>
  );
}
