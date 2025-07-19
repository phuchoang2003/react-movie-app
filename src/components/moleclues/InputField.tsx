import React from "react";
import { TextInput, Label } from "../atoms";

export interface InputFieldProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeHolder?: string;
  error?: string;
  className?: string;
  wrapperClassname?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  value,
  onChange,
  type = "text",
  placeHolder = "",
  className = "",
  error,
}) => (
  <div className={className}>
    <Label htmlFor={id} error={!!error}></Label>
    <TextInput type={type} placeHolder={placeHolder} id={id}></TextInput>
  </div>
);
