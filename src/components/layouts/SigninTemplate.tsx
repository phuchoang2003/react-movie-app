import React from "react";
import { Form } from "../organism";
import type { InputFieldProps } from "../moleclues";

interface SigninTemplateProps {
  title?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
  fields: Array<InputFieldProps>;
}

// The reason your Form isn't centered is because the className "justify center" is not valid Tailwind CSS.
// To center both vertically and horizontally, use "justify-center items-center" on the flex container.
// Also, ensure the parent container has a height (e.g., h-screen) to allow vertical centering.

const SigninTemplate: React.FC<SigninTemplateProps> = ({
  title,
  onSubmit,
  children,
  fields,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full px-4 py-8 bg-gray-900">
      <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-xl w-full max-w-[450px] min-h-[400px] md:min-h-[600px]">
        <Form
          title={title}
          onSubmit={onSubmit}
          children={children}
          fields={fields}
          className=""
        />
      </div>
    </div>
  );
};

export default SigninTemplate;
