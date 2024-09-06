"use client";

import { animate, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Counter = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  useEffect(() => {
    const animation = animate(count, 273, { duration: 10 });

    return animation.stop;
  }, []);
  return (
    <motion.div className="font-bold text-[30px] lg:text-[45px] lg:font-extrabold">
      {rounded}
    </motion.div>
  );
};

export default Counter;
