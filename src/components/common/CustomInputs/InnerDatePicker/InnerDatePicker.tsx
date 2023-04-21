import { FC } from "react";
import {
  ControllerRenderProps,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form";
import DatePicker from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";

import { PrimaryButton } from "@components/common/PrimaryButton/PrimaryButton";

interface Data {
  year: number;
  month: number;
  day: number;
}

interface Props {
  field: ControllerRenderProps<FieldValues, any>;
  setValue: UseFormSetValue<FieldValues>;
  placeHolder: string;
}

const InnerDatePicker: FC<Props> = ({
  field,
  setValue,
  placeHolder,
}): JSX.Element => {
  const handleDateChange = (data: Data): void => {
    const formattedDateObject = `${data.year}/${data.month}/${data.day}`;
    setValue(field.name, formattedDateObject);
  };

  /* rendering a custom input for date picker */
  const renderCustomInput = ({ ref }: { ref: any }): JSX.Element => (
    <input
      readOnly
      ref={ref}
      placeholder={placeHolder}
      value={field.value}
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
            }}
            className="text-sm !px-6 !py-3"
          >
            تنظیم مجدد
          </PrimaryButton>
        </div>
      )}
    />
  );
};

export { InnerDatePicker };
