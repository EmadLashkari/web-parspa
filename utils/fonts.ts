import localFont from "next/font/local";

const IranYekan = localFont({
  src: [
    {
      path: "../public/fonts/IRANYekanWebRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebBold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/IRANYekanWebLight.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/IRANYekanWebExtraBold.woff2",
      weight: "800",
      style: "extrabold",
    },
  ],
  variable: "--font-iran-yekan",
  display: "swap",
  adjustFontFallback: false,
});

export { IranYekan };
