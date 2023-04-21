import { DetailedHTMLProps, ButtonHTMLAttributes, FC } from "react";

const PrimaryButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, ...restOfAttributes }): JSX.Element => {
  return (
    <button
      className={
        "px-6 py-3 bg-primary text-base font-bold text-white rounded-2xl " +
        (className ? className : "")
      }
      {...restOfAttributes}
    >
      {children}
    </button>
  );
};

export { PrimaryButton };
