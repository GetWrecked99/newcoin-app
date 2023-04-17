import DatePicker from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";
import { RegisterFormType } from "@core/types/form-types/register-form.types";
import { useState } from "react";
import {
  FieldValues,
  UseControllerProps,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";

interface Data {
  year: number;
  month: number;
  day: number;
}

interface Props {
  field: UseControllerProps<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  placeHolder: string;
}

export default function InnerDatePicker({
  field,
  setValue,
  getValues,
  placeHolder,
}: Props) {
  const [dateValue, setDateValue] = useState(getValues(field.name));

  const handleDateChange = (data: Data): void => {
    const formattedDateObject = `${data.year}/${data.month}/${data.day}`;
    setDateValue(formattedDateObject);
    setValue(field.name, formattedDateObject);
  };

  /* rendering a custom input for date picker */
  const renderCustomInput = ({ ref }: { ref: any }) => (
    <input
      readOnly
      ref={ref}
      placeholder={placeHolder}
      value={dateValue || ""}
      className="text-sm rounded-full w-full !h-full pr-[1px] pt-1 pl-[22px] outline-none appearance-none placeholder:text-base"
    />
  );
  return (
    <DatePicker
      onChange={handleDateChange}
      shouldHighlightWeekends
      locale="fa"
      inputName={field.name}
      renderInput={renderCustomInput}
      wrapperClassName="w-full relative h-full !rounded-full !block bg-transparent !border-none !z-0"
      calendarSelectedDayClassName="!bg-teal-600"
      calendarTodayClassName="!border-1 !font-medium !border-gray-300 after:invisible"
      renderFooter={() => (
        <div className="flex justify-center !pb-4 !px-8">
          <PrimaryButton
            type="button"
            onClick={() => {
              setValue(field.name, "");
              setDateValue(getValues(field.name));
            }}
            className="text-sm !px-6 !py-3"
          >
            تنظیم مجدد
          </PrimaryButton>
        </div>
      )}
    />
  );
}
