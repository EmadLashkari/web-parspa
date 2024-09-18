import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { name: string; value: string }[];
  label: string;
  error?: string[];
}

function Select({ options, label, error, ...props }: SelectProps) {
  return (
    <div className="relative border border-black-primary p-3 rounded-lg w-full">
      <span className="text-sm bg-white absolute -top-3 right-3 px-2">
        {label}
      </span>
      <select {...props} className="w-full px-5 bg-white">
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
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

export default Select;
