import React from "react";

interface LabelProps {
  htmlFor: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  error?: boolean;
}

const Label: React.FC<LabelProps> = ({
  htmlFor,
  disabled = false,
  error = false,
  className = "",
  children,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      aria-disabled={disabled}
      className={`block text-sm font-medium mb-1 ${
        disabled
          ? "text-gray-400 cursor-not-allowed"
          : error
          ? "text-red-500"
          : "text-white"
      } ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
