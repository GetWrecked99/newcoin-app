import TickIcon from "@assets/icons/clipboardtick.svg";
import OTPInput from "react-otp-input";
import { ErrorMessage } from "@hookform/error-message";
import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";
import { Dispatch, SetStateAction } from "react";
import {
  ControllerRenderProps,
  FieldErrors,
  FieldValues,
} from "react-hook-form";

interface Props {
  phoneNumberValue: string;
  optValue: string;
  setOptValue: Dispatch<SetStateAction<string>>;
  securityCodeField: ControllerRenderProps<FieldValues, "securityCode">;
  errors: FieldErrors<FieldValues>;
  optHandler: (val: string) => void;
}

export default function OptField({
  phoneNumberValue,
  optValue,
  setOptValue,
  securityCodeField,
  optHandler,
  errors,
}: Props) {
  return (
    <div className="flex flex-col justify-center">
      <div className="h-16 flex items-center px-7 bg-[#E8F4FF] rounded-full">
        <i className="ml-6">
          <TickIcon />
        </i>
        <p className="text-sm text-black mt-1">
          کد تائید به شماره {phoneNumberValue} ارسال شده است. این کد تا 02:00
          دقیقه دیگر معتبر است
        </p>
      </div>
      <div className="flex flex-col items-center mt-[26px]">
        <span className="text-base text-black font-bold text-center ">
          کد تایید
        </span>
        <div dir="ltr" className="flex flex-row my-4">
          <OTPInput
            value={optValue}
            onChange={setOptValue}
            numInputs={4}
            renderSeparator={<span className="w-[10px]"></span>}
            renderInput={(props) => (
              <input
                {...securityCodeField}
                {...props}
                className="!w-[60px] !h-[60px] border-[1px] border-[#D6D6D6] rounded-2xl text-center outline-none"
              />
            )}
          />
        </div>
        <PrimaryButton
          type="button"
          onClick={() => optHandler(phoneNumberValue)}
        >
          تایید شماره همراه
        </PrimaryButton>
      </div>
      <div className="min-h-[35px]">
        <ErrorMessage
          name={securityCodeField.name}
          errors={errors}
          render={({ message }) => (
            <p className="block pt-3 pr-1 text-xs 2xl:text-sm font-bold text-red-500">
              {message}
            </p>
          )}
        />
      </div>
    </div>
  );
}
