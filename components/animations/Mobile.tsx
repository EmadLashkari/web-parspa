"use client";

import React, { ReactNode } from "react";
import { motion, useScroll } from "framer-motion";

const MobileAnime = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default MobileAnime;
