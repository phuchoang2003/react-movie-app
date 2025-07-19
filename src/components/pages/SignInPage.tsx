import React, { useState } from "react";
import { SigninTemplate } from "../layouts";
import type { InputFieldProps } from "../moleclues";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const fields: Array<InputFieldProps> = [
    {
      id: "email",
      value: email,
      placeHolder: "Email or mobile number",
      onChange: (e) => setEmail(e.target.value),
      className: "w-full",
    },
    {
      id: "password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      placeHolder: "Password",
      className: "w-full",
    },
  ];

  return (
    <SigninTemplate
      title="Sign In"
      fields={fields}
      onSubmit={handleSubmitForm}
    />
  );
};

export default SignIn;
