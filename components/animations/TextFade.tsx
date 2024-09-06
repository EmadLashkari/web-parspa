"use client";

import React, { ReactNode } from "react";
import { motion, useScroll } from "framer-motion";

const TextFadeIn = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      whileInView={{ opacity: [0, 0.5, 1], x: [300, -50, 0] }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default TextFadeIn;
