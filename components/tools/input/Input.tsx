import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string[];
}
function Input({ label, error, ...props }: InputProps) {
  return (
    <div
      className={`relative border bg-white ${
        error ? "border-red-error" : "border-black-primary"
      }  p-3 rounded-lg w-full`}
    >
      <span className="text-sm rounded-xl bg-white absolute -top-3 right-3 px-2">
        {label}
      </span>
      <input
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

export default Input;
