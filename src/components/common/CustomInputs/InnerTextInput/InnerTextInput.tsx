import { FC } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface Props {
  field: ControllerRenderProps<FieldValues, any>;
  placeHolder: string;
  isInputDisabled?: boolean;
}

const InnerTextInput: FC<Props> = ({
  field,
  placeHolder,
  isInputDisabled,
}): JSX.Element => {
  return (
    <input
      dir="rtl"
      type="text"
      className="w-full h-full rounded-e-full pr-[1px] pt-1 pl-[22px] outline-none placeholder:text-right disabled:bg-white"
      placeholder={placeHolder}
      autoComplete="off"
      disabled={isInputDisabled ? true : false}
      {...field}
    />
  );
};

export { InnerTextInput };
