"use client";
import React, { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, message, Upload } from "antd";
import type { GetProp, UploadProps } from "antd";
import Image from "next/image";
import { fetchData } from "@/utils/fetch";
import { UploadRequestOption } from "rc-upload/lib/interface";
import { TickCircle } from "iconsax-react";
import getHeaders from "@/utils/getHeaders";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const FileInput = ({
  label,
  setImage,
  imgTitle,
}: {
  label: string;
  setImage?: string;
  imgTitle: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const token = typeof window !== "undefined" && localStorage.getItem("token");

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
    }
    if (info.file.status === "done") {
    }
  };
  useEffect(() => {
    if (localStorage.getItem(imgTitle) !== null) {
      getImage();
    }
  }, []);
  function getImage() {
    try {
      fetchData(
        `upload/pic/${localStorage.getItem(imgTitle)}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        (status) => {},
        (data) => {}
      );
      // console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  const custom_request = async (props: UploadRequestOption<any>) => {
    const formData = new FormData();
    formData.append("", props.file);
    try {
      const res = await fetchData(
        "upload/pic",
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
        (error) => {},
        (data) => {
          setImage = data.msg;
          localStorage.setItem(imgTitle, data.msg);
          setLoading(false);
          setImageUrl(data.msg);
          return data;
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>{label}</div>
    </button>
  );

  return (
    <Flex gap="middle" wrap>
      <Upload
        customRequest={(props) => custom_request(props)}
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        // action="https://api.parspa-ai.ir/api/upload/pic"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <TickCircle size={25} variant="Outline" /> : uploadButton}
      </Upload>
    </Flex>
  );
};

export default FileInput;
