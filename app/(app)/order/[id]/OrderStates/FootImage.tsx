"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function FootImage({
  feetUrl,
  title,
}: {
  feetUrl: string;
  title: string;
}) {
  const [image, setImage] = useState<string>("");
  useEffect(() => {
    const token = localStorage.getItem("token") as string;
    const getImage = async (url: string) => {
      const image = await fetch(`https://api.parspa-ai.ir/upload/pic/${url}`, {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.blob();
        })
        .then((data) => {
          const url: string = URL.createObjectURL(data);
          console.log(data, url);
          setImage(url);
          return url;
        });
      return image;
    };

    getImage(feetUrl);
  }, []);

  return (
    <div className="p-4 border-2 border-dashed border-primary rounded-xl flex flex-col justify-center items-center gap-2">
      <Image
        src={image}
        width={50}
        height={50}
        alt=""
        className="w-20 h-20 border border-black-primary rounded-lg"
      />
      <span>{title}</span>
    </div>
  );
}
