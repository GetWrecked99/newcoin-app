import { PatternFormat } from "react-number-format";
import {
  ControllerRenderProps,
  FieldValues,
  UseControllerProps,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { useState } from "react";
import { RegisterFormType } from "@core/types/form-types/register-form.types";

interface Props {
  field: UseControllerProps<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  placeHolder: string;
}
export default function InnerNationalIdInput({
  field,
  setValue,
  getValues,
  placeHolder,
}: Props) {
  const [idValue, setIdValue] = useState(getValues(field.name));

  const onChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    setIdValue(value.target.value);
    const formattedValue = value.target.value.replace(/\s/g, "");
    setValue(field.name, formattedValue);
  };
  return (
    <div className="w-full h-full">
      <PatternFormat
        value={idValue}
        name={field.name}
        onChange={onChange}
        className="!w-full !h-full rounded-full pr-[1px] pt-1 pl-[22px] outline-none placeholder:text-right"
        type="text"
        autoComplete="off"
        format="### ### ####"
        dir="ltr"
        placeholder={placeHolder}
      />
    </div>
  );
}
