import React from "react";

function TextArea({
  props,
  label,
}: {
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  label: string;
}) {
  return (
    <div className="relative border border-black-primary p-3 rounded-lg w-full lg:col-span-2">
      <span className="text-sm bg-white absolute -top-3 right-3 px-2">
        {label}
      </span>
      <textarea
        dir="rtl"
        className="border-none focus:outline-none w-full"
        {...props}
      />
    </div>
  );
}

export default TextArea;
