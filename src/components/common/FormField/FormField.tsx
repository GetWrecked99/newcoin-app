import { ReactNode } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors, FieldValues } from "react-hook-form";
import { RegisterFormType } from "@core/types/form-types/register-form.types";

interface Props {
  children: ReactNode;
  label: string;
  fieldName: keyof FieldValues;
  fieldError: FieldErrors<FieldValues>;
  fieldIcon: ReactNode;
}

export default function FormField({
  children,
  label,
  fieldName,
  fieldError,
  fieldIcon,
}: Props) {
  return (
    <div className="flex flex-col items-start ">
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
      <div className="min-h-[45px]">
        <ErrorMessage
          name={fieldName}
          errors={fieldError}
          render={({ message }) => (
            <p className="block pt-3 pr-1 text-xs font-bold text-red-500">
              {message}
            </p>
          )}
        />
      </div>
    </div>
  );
}
