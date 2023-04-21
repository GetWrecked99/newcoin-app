import { FC, ReactNode } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface Props {
  children: ReactNode;
  label: string;
  fieldName: keyof FieldValues;
  fieldError: FieldErrors<FieldValues>;
  fieldIcon: ReactNode;
}

const FormField: FC<Props> = ({
  children,
  label,
  fieldName,
  fieldError,
  fieldIcon,
}): JSX.Element => {
  return (
    <div className="w-full flex flex-col items-start">
      <div className="relative border-[1px] w-full h-[60px] border-[#D6D6D6] flex flex-row items-center rounded-full">
        <i className="flex items-center mx-[22px]">{fieldIcon}</i>
        <div className="flex items-center ml-[21px]">
          <div className="h-6 w-[2px] bg-[#D6D6D6]"></div>
        </div>
        {children}
        <label className="absolute text-base px-[10px] bg-white font-bold cursor-text -top-[14px] right-12 pointer-events-none z-[1]">
          {label}
        </label>
      </div>
      <div className="min-h-[35px]">
        <ErrorMessage
          name={fieldName}
          errors={fieldError}
          render={({ message }) => (
            <p className="block pt-3 pr-1 text-xs 2xl:text-sm font-bold text-red-500">
              {message}
            </p>
          )}
        />
      </div>
    </div>
  );
};

export { FormField };
