"use client";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
type CardItem = {
  url: string;
  title: string;
  discription: string;
};

const CardSliderAnime = ({
  children,
  data,
}: {
  children: ReactNode;
  data: CardItem[];
}) => {
  const [positionIndexers, setPositionIndexer] = useState<number[]>([0, 1, 2]);
  const positions = ["center", "left", "right"];
  const nextCard = () => {
    setPositionIndexer((prev) => {
      const updateIndexers = prev.map((prev) => (prev + 1) % 3);
      return updateIndexers;
    });
  };
  const beforeCard = () => {
    setPositionIndexer((prev) => {
      const updateIndexers = prev.map((prev) => (prev + 2) % 3);
      return updateIndexers;
    });
  };
  const cardVariants: Variants = {
    center: { x: "0%", scale: 1, zIndex: 10, opacity: 1 },
    left: { x: "50%", scale: 0.7, zIndex: 5, opacity: 0.5 },
    right: { x: "-50%", scale: 0.7, zIndex: 5, opacity: 0.5 },
  };
  return (
    <div className="flex w-full md:w-[60%] py-80  flex-row justify-center items-center relative">
      <button
        onClick={nextCard}
        className="absolute bg-primary200 rounded-full p-3 z-[100] right-3 top-1/2 -translate-y-1/2"
      >
        <ArrowRight2 size={25} variant="Outline" />
      </button>
      <button
        onClick={beforeCard}
        className="absolute z-[100] bg-primary200 rounded-full p-3 left-3 top-1/2 -translate-y-1/2"
      >
        <ArrowLeft2 size={25} variant="Outline" />
      </button>
      {data.map((item, index) => {
        return (
          <motion.div
            initial={"center"}
            key={item.title}
            variants={cardVariants}
            animate={positions[positionIndexers[index]]}
            transition={{ duration: 0.75, delay: 0.1 }}
            className={`bg-white w-[20rem] lg:w-[20rem] m-5 lg:m-0 py-6 rounded-3xl absolute`}
          >
            <div className="flex flex-col gap-9 justify-center items-center p-10">
              {/* image  */}
              <div>
                <Image width={200} height={200} src={item.url} alt="" />
              </div>
              {/* text  */}
              <div className="flex flex-col gap-4 justify-center items-center">
                <h2 className="text-black-bold text-center text-[18px] font-bold ">
                  {item.title}
                </h2>
                <p className="text-black-bold text-center text-[14px]">
                  {item.discription}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CardSliderAnime;
