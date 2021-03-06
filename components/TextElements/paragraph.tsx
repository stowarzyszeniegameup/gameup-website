import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  light?: boolean;
  centered?: boolean;
}

export const P = ({ children, light, centered }: IProps) => {
  return (
    <p
      className={`${centered ? "text-center" : "text-left"} ${
        light ? "text-white" : "text-black"
      } font-secondary text-lg md:text-xl tracking-wide leading-8 my-4`}
    >
      {children}
    </p>
  );
};
