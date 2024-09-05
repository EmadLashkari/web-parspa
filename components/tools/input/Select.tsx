import React from "react";

function Select({
  options,
  label,
  props,
}: {
  options: { name: string; value: string }[];
  label: string;
  props?: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
}) {
  return (
    <div className="relative border border-black-primary p-3 rounded-lg w-full">
      <span className="text-sm bg-white absolute -top-3 right-3 px-2">
        {label}
      </span>
      <select className="w-full px-5 bg-white">
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
