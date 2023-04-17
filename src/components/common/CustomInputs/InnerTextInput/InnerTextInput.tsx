import { FieldValues, UseControllerProps } from "react-hook-form";

interface Props {
  field: UseControllerProps<FieldValues>;
  placeHolder: string;
}

export default function InnerTextInput({
  field,
  placeHolder,
}: Props): JSX.Element {
  return (
    <input
      dir="auto"
      type="text"
      className="w-full h-full rounded-full pr-[1px] pt-1 pl-[22px] outline-none placeholder:text-right"
      placeholder={placeHolder}
      autoComplete="off"
      {...field}
    />
  );
}
