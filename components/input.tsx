import React from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  className: string;
  register: UseFormRegister<Record<string, any>>;
  name: string;
  label: string;
};

const Input = ({ className, register, name, label }: InputProps) => {
  return (
    <div className="relative mb-2">
      <input />
    </div>
  );
};

export default Input;
