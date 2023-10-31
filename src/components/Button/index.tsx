import React, { ButtonHTMLAttributes } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: Props) => {
  return (
    <button type="button" data-testid="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
