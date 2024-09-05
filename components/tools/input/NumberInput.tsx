import { Call } from "iconsax-react";
import React from "react";

const NumberInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="relative">
      <input
        className="py-3 pl-12 border border-black-primary rounded-md"
        {...props}
      />
      <Call
        size={25}
        variant="Outline"
        className="absolute top-1/2 -translate-y-1/2 left-3 text-black-primary"
      />
    </div>
  );
};

export default NumberInput;
