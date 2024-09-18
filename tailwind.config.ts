import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#28BCBE",
      secondary: "#DEF7F7",
      "primary-2": "#28BCBE",
      "background-primary": "#fff",
      white: "#fff",
      "white-primary": "#eaffff",
      "black-primary": "#104242",
      "tx-primary": "#187577",
      "primary-3": "#BCF0F1",
      "primary-5": "#89E4E6",
      "primary-7": "#57D9DB",
      "red-error": "#FF0000",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        yekan: ["var(--font-iran-yekan)"],
      },
    },
  },
  plugins: [],
};
export default config;
