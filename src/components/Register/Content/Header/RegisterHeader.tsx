import React, { FC } from "react";

interface Props {
  currentFormStep: number;
}

const RegisterHeader: FC<Props> = ({ currentFormStep }): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-base font-bold text-primary">
        مرحله {currentFormStep} از 3
      </span>
      <span className="mt-8 mb-12 text-xl font-bold text-[#1E1E1E]">
        لطفا اطلاعات خود را با دقت وارد نمائید
      </span>
    </div>
  );
};

export { RegisterHeader };
