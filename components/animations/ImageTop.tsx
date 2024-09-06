"use client";

import React, { ReactNode } from "react";
import { motion, useScroll } from "framer-motion";

const ImageTop = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: [0, 0.5, 1], y: [100, -50, 0] }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ImageTop;
