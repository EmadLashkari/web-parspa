"use client";
import AntInputNumber from "@/components/tools/input/AntNumberInput";
import Input from "@/components/tools/input/Input";
import { Form } from "antd";
import React, { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function FootInfo() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="bg-secondary flex flex-col justify-center items-center">
      <span dir="rtl" className="w-full text-right p-2 text-lg font-bold">
        طول پا :
      </span>
      <div className="flex flex-row justify-center p-2 gap-3">
        <section className="relative">
          <Form.Item
            // style={{ direction: "rtl" }}
            validateStatus={errors ? "error" : "validating"}
            help={
              errors.rightFeetSize
                ? (errors.rightFeetSize.message as ReactNode)
                : ""
            }
          >
            <Controller
              control={control}
              name="rightFeetSize"
              render={({ field }) => (
                <AntInputNumber {...field} label="اندازه پای راست" />
              )}
            />
          </Form.Item>
        </section>
        <section>
          <Form.Item
            // style={{ direction: "rtl" }}
            validateStatus={errors ? "error" : "validating"}
            help={
              errors.leftFeetSize
                ? (errors.leftFeetSize.message as ReactNode)
                : ""
            }
          >
            <Controller
              control={control}
              name="leftFeetSize"
              render={({ field }) => (
                <AntInputNumber {...field} label="اندازه پای چپ" />
              )}
            />
          </Form.Item>
        </section>
      </div>
    </div>
  );
}
