import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
  children,
  className,
  ...restOfAttributes
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
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
}
