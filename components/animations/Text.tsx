"use client";

import React, { ReactNode } from "react";
import { motion, useScroll } from "framer-motion";

const TextAnime = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  const splitedText = text.split(" ");

  return (
    <h2 className="text-black font-poppins font-bold text-[20px] lg:text-[30px] lg:mt-32 w-[80%] mt-10 text-center">
      {splitedText.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </h2>
  );
};

export default TextAnime;
