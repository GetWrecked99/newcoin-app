import { useState } from "react";
import {
  ControllerRenderProps,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form";

import { PatternFormat } from "react-number-format";

interface Props {
  field: ControllerRenderProps<FieldValues, any>;
  setValue: UseFormSetValue<FieldValues>;
  placeHolder: string;
}
export default function InnerNationalIdInput({
  field,
  setValue,
  placeHolder,
}: Props) {
  const [idValue, setIdValue] = useState(field.value);

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
