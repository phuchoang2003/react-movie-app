import React, { type FormEvent } from "react";
import { InputField } from "../moleclues";
import { type InputFieldProps } from "../moleclues";

interface FormProps {
  title?: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
  fields: Array<InputFieldProps>;
  className?: string;
}

const Form: React.FC<FormProps> = ({
  title,
  onSubmit,
  fields,
  children,
  className,
}) => (
  <form onSubmit={onSubmit} className={`${className}`}>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    {fields.map((field) => (
      <InputField key={field.id} {...field} />
    ))}
    {children}
  </form>
);

export default Form;
