import { FC, Fragment } from "react";
import Image from "next/image";

import { stepperInformation } from "@core/constants/register-page/register.constants";

import logoImage from "@assets/images/common/logo.png";

interface Props {
  currentFormStep: number;
}

const RegisterSidebar: FC<Props> = ({ currentFormStep }): JSX.Element => {
  const renderStepperData = () =>
    stepperInformation.map((item) => (
      <Fragment key={item.step}>
        <li className="flex flex-row items-center justify-start">
          <div
            className={
              "w-8 h-8 border-[3px] ml-[26px] border-transparent rounded-full " +
              (currentFormStep === item.step
                ? "!border-white bg-[#9CC4F2]"
                : currentFormStep > item.step
                ? "bg-white"
                : "bg-[#9CC4F2]")
            }
          ></div>
          <span
            className={
              "text-xl font-bold mt-1 " +
              (currentFormStep >= item.step ? "text-white" : "text-[#9CC4F2]")
            }
          >
            {item.text}
          </span>
        </li>
        <li className="my-3 mr-[15px] w-0.5 h-[34px] bg-white last:hidden"></li>
      </Fragment>
    ));

  return (
    <div className="h-full flex flex-col bg-primary p-8 rounded-s-2xl">
      <figure className="mx-auto mt-[80px]">
        <Image src={logoImage} alt="NewCoin Logo" />
      </figure>
      <h1 className="mt-11 text-4xl font-black text-white text-center">
        ثبت نام
      </h1>
      <ol className="flex flex-col items-start mt-[90px]">
        {renderStepperData()}
      </ol>
    </div>
  );
};

export { RegisterSidebar };
