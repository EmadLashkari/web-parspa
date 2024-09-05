"use client";
import React, { useState } from "react";
import Steps from "./Steps";
import UploadFoot from "./UploadFoot";
import { Carousel, CarouselProps, RadioChangeEvent } from "antd";
import uploadImage from "@/public/image/uploadImg.png";
type DotPosition = CarouselProps["dotPosition"];

export default function PageTransition() {
  const [dotPosition, setDotPosition] = useState<DotPosition>("top");

  const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
    setDotPosition(value);
  };
  return (
    <div className="w-full h-full bg-white p-3 overflow-scroll">
      <Steps image={uploadImage} label="بارگزاری تصاویر" />
      {/* <Carousel dotPosition={dotPosition}> */}
      <UploadFoot />
      {/* </Carousel> */}
    </div>
  );
}
