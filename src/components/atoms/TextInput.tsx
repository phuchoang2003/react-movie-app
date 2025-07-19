import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string;
  type?: string;
  error?: string;
  id?: string;
  className?: string;
  wrapperClassname?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  placeHolder,
  error,
  id,
  className,
  wrapperClassname,
}) => {
  return (
    <div className={className} id={id}>
      <input
        type={type}
        placeholder={placeHolder}
        className={wrapperClassname}
      />
    </div>
  );
};

export default TextInput;
