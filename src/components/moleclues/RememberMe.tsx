import React from "react";
import { Checkbox, Label } from "../atoms";

interface RememberMeProps {
  checked: boolean;
  id?: string;
  className?: string;
}

const RememberMe: React.FC<RememberMeProps> = ({
  checked,
  id = "rememberMe",
  className = "",
}) => {
  return (
    <div>
      <Checkbox id={id} checked={checked}></Checkbox>
      <Label htmlFor={id} className="ml-2">
        Remember me
      </Label>
    </div>
  );
};

export default RememberMe;
