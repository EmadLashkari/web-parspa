"use client";
import React, { useState } from "react";
import Steps from "./Steps";
import UploadFoot from "./UploadFoot";
import { Carousel, CarouselProps, RadioChangeEvent } from "antd";
import uploadImage from "@/public/image/uploadImg.png";
type DotPosition = CarouselProps["dotPosition"];

export default function PageTransition() {
  const [dotPosition, setDotPosition] = useState<DotPosition>("top");
  const [page, setPage] = useState<number>(1);
  const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
    setDotPosition(value);
  };
  return (
    <div className="w-full h-full bg-white p-3 overflow-scroll">
      {/* <Carousel dotPosition={dotPosition}> */}
      <UploadFoot />
      {/* </Carousel> */}
    </div>
  );
}
