import React from "react";
import { Link, type LinkProps } from "react-router";

interface TextLinkProps {
  children: React.ReactNode;
  to?: LinkProps["to"];
  href?: string;
  className?: string;
}

const TextLink: React.FC<TextLinkProps> = ({
  children,
  to,
  href,
  className = "",
  ...props
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`text-indigo-500 hover:underline font-medium ${className}`}
        {...props}
      >
        {" "}
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={`text-indigo-500 hover:underline font-medium ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default TextLink;
