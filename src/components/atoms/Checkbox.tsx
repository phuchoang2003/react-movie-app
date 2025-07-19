import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ className = "", ...props }) => (
  <input
    type="checkbox"
    className={`form-checkbox h-4 w-4 text-indigo-600 rounded ${className}`}
    {...props}
  />
);

export default Checkbox;
