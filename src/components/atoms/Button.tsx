import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  className,
}) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled} className={`${className}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
