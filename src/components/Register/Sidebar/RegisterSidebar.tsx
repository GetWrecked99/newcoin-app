import { Fragment } from "react";
import Image from "next/image";

import { stepperInformation } from "@core/constants/register/register.constants";

import logoImage from "@assets/images/login/logo.png";

export default function RegisterSidebar() {
  const renderStepperData = () =>
    stepperInformation.map((item) => (
      <Fragment key={item.step}>
        <li className="flex flex-row items-center justify-start">
          <div className="w-8 h-8 border-[3px] ml-[26px] border-white bg-[#9CC4F2] rounded-full"></div>
          <span className="text-xl font-bold mt-1 text-white">{item.text}</span>
        </li>
        <li className="my-3 mr-[15px] w-0.5 h-[34px] bg-white last:hidden"></li>
      </Fragment>
    ));

  return (
    <div className="h-full flex flex-col bg-primary p-8">
      <figure className="mx-auto mt-2">
        <Image src={logoImage} alt="NewCoin Logo" />
      </figure>
      <h1 className="mt-3 text-4xl font-black text-white text-center">
        ثبت نام
      </h1>
      <ol className="flex flex-col items-start mt-[90px]">
        {renderStepperData()}
      </ol>
    </div>
  );
}
