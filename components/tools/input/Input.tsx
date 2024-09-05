import React from "react";

function Input({
  props,
  label,
}: {
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label: string;
}) {
  return (
    <div className="relative border border-black-primary p-3 rounded-lg w-full">
      <span className="text-sm bg-white absolute -top-3 right-3 px-2">
        {label}
      </span>
      <input
        dir="rtl"
        className="border-none focus:outline-none w-full"
        {...props}
      />
    </div>
  );
}

export default Input;
