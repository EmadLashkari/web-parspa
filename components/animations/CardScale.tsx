"use client";
import { motion } from "framer-motion";
import { MouseEventHandler, ReactNode, useState } from "react";

const HoverScale = ({ children }: { children: ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className="w-[20rem] border-bg-sec-color  bg-white shadow-bg-sec-color shadow-2xl px-10 pt-10 rounded-2xl flex flex-col justify-center items-end gap-3"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }} // Scale up on hover
      transition={{ type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};

export default HoverScale;
