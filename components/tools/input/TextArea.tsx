import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string[];
}

function TextArea({ label, error, ...props }: TextAreaProps) {
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
      <span className="absolute -bottom-4 left-0 text-xs text-red-error">
        {error?.map((item) => (
          <span className="" key={item}>
            {item}
          </span>
        ))}
      </span>
    </div>
  );
}

export default TextArea;
