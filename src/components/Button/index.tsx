import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const _Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="px-4 py-2 bg-blue-500 text-white rounded">{children}</button>;
};

export default _Button;