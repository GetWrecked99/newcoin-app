import { FieldValues, UseControllerProps } from "react-hook-form";

interface Props {
  field: UseControllerProps<FieldValues>;
  placeHolder: string;
  isInputDisabled?: boolean;
}

export default function InnerTextInput({
  field,
  placeHolder,
  isInputDisabled,
}: Props): JSX.Element {
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
}
