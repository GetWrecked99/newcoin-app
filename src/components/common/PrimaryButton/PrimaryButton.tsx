import { DetailedHTMLProps, ButtonHTMLAttributes, FC } from "react";

import { ButtonIndicator } from "./ButtonIndicator";

const PrimaryButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, disabled, ...restOfAttributes }): JSX.Element => {
  return (
    <button
      className={
        "px-6 py-3 text-base font-bold text-white rounded-2xl " +
        (disabled ? "cursor-not-allowed bg-gray-500 " : "bg-primary ") +
        (className ? className : "")
      }
      {...restOfAttributes}
    >
      {disabled ? (
        <>
          <span className="ml-4">لطفا صبر کنید . . .</span>
          <ButtonIndicator />
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export { PrimaryButton };
