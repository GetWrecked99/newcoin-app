import React, { useState } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props {
  field: ControllerRenderProps<FieldValues, any>;
  placeHolder: string;
}

export default function InnerPasswordInput({ field, placeHolder }: Props) {
  const [showHidePassword, setShowHidePassword] = useState(false);
  const handleChangeType = () => setShowHidePassword(!showHidePassword);
  return (
    <>
      <i
        className="flex text-xl absolute inset-y-[30px] left-0 items-center pl-6 cursor-pointer text-[#D6D6D6] font-bold"
        onClick={handleChangeType}
      >
        {!showHidePassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </i>
      <input
        className="w-full h-full rounded-full pr-[1px] pt-1 pl-14 outline-none placeholder:text-right appearance-none"
        placeholder={placeHolder}
        autoComplete="off"
        type={showHidePassword ? "text" : "password"}
        dir="ltr"
        {...field}
      />
    </>
  );
}
