import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string;
  type?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ type, placeHolder, ...props }) => {
  return (
    <div>
      <input type={type} placeholder={placeHolder} />
    </div>
  );
};

export default Input;
