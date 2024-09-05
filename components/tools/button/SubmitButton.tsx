import React, { ButtonHTMLAttributes, ReactNode } from "react";

const SubmitButton = ({
  children,
  props,
}: {
  children: ReactNode;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <button
      className="w-full px-4 py-3 bg-primary rounded-lg text-background-primary"
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
