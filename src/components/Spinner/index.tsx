"use client";

import { Spinner, SpinnerProps } from "flowbite-react";

export interface ISpinnerCLVProps extends SpinnerProps {
  size?: string;
  spinnerClassNames?: string;
}

const spinnerTheme = {
  size: {
    md: "h-[75px] w-[75px]",
    lg: "h-[100px] w-[100px]",
    sm: "h-[50px] w-[50px]",
  },
};

const _Spinner = ({ size, spinnerClassNames = "", ...props}: ISpinnerCLVProps) => {
  return (
    <Spinner
      size={size || "md"}
      theme={spinnerTheme}
      defaultValue="90"
      {...props}
      className={
        "h-fit dark:text-gray/700 fill-[#1C64F2] dark:fill-[#1A56DB] dark:text-gray/700 " +
        spinnerClassNames
      }
    />
  );
};

export default _Spinner;
