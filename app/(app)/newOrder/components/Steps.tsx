import Image from "next/image";
import React from "react";

function Steps({ image, label }: { image: any; label: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <Image src={image} alt={"upload image"} />
      <span>{label}</span>
    </div>
  );
}

export default Steps;
