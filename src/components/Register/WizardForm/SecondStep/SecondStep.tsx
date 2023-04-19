import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormSetValue,
  UseFormTrigger,
  useController,
} from "react-hook-form";

import InnerTextInput from "@components/common/CustomInputs/InnerTextInput/InnerTextInput";
import FormField from "@components/common/FormField/FormField";
import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";

import LockIcon from "@assets/icons/lock.svg";
import InnerPasswordInput from "@components/common/CustomInputs/InnerPasswordInput/InnerPasswordInput";

import PhoneIcon from "@assets/icons/mobile.svg";
import MailIcon from "@assets/icons/messagetext.svg";
import TickIcon from "@assets/icons/clipboardtick.svg";
import OTPInput from "react-otp-input";
import { Dispatch, SetStateAction } from "react";
import ArrowIcon from "@assets/icons/arrowleft.svg";
import { ErrorMessage } from "@hookform/error-message";
import { secondStepFieldNames } from "@core/constants/forms/register-form/register-form.constants";

interface Props {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  nextFormStep: (fieldNames: string[]) => Promise<void>;
  prevFormStep: () => void;
  isInputDisabled: boolean;
  storedCode: string;
  sendSmsHandler: (val: string) => void;
  optHandler: () => void;
  isPhoneNumberValid: boolean;
  optValue: string;
  setOptValue: Dispatch<SetStateAction<string>>;
}

export default function SecondStep({
  control,
  errors,
  nextFormStep,
  prevFormStep,
  isInputDisabled,
  storedCode,
  sendSmsHandler,
  optHandler,
  isPhoneNumberValid,
  optValue,
  setOptValue,
}: Props) {
  /* starts fields control */
  const { field: phoneNumberField } = useController({
    name: "phoneNumber",
    control: control,
  });
  const { field: emailField } = useController({
    name: "email",
    control: control,
  });

  const { field: passwordField } = useController({
    name: "password",
    control: control,
  });

  const { field: confirmPasswordField } = useController({
    name: "confirmPassword",
    control: control,
  });

  const { field: securityCodeField } = useController({
    name: "securityCode",
    control: control,
  });

  return (
    <div className="flex flex-col h-full">
      <div className="w-full max-w-[582px] flex flex-col flex-grow mx-auto">
        <div className="flex flex-col">
          <FormField
            label="شماره موبایل"
            fieldName={phoneNumberField.name}
            fieldError={errors}
            fieldIcon={<PhoneIcon />}
          >
            <div className="w-full relative">
              <InnerTextInput
                field={phoneNumberField}
                placeHolder="لطفا شماره خود را وارد نمایید"
                isInputDisabled={isInputDisabled}
              />
              {!storedCode && !securityCodeField.value ? (
                <button
                  type="button"
                  onClick={() => sendSmsHandler(phoneNumberField.value)}
                  className="absolute top-1/2 left-[27px] -translate-y-1/2 text-base font-bold text-primary"
                >
                  ارسال کد
                </button>
              ) : null}
            </div>
          </FormField>
          {isPhoneNumberValid ? (
            <div className="flex flex-col justify-center mb-10">
              <div className="h-16 flex items-center px-7 bg-[#E8F4FF] rounded-full">
                <i className="ml-6">
                  <TickIcon />
                </i>
                <p className="text-sm text-black mt-1">
                  کد تائید به شماره {phoneNumberField.value} ارسال شده است. این
                  کد تا 02:00 دقیقه دیگر معتبر است
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
                <PrimaryButton type="button" onClick={optHandler}>
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
          ) : null}
        </div>
        <div className="mt-5">
          <FormField
            label="ایمیل"
            fieldName={emailField.name}
            fieldError={errors}
            fieldIcon={<MailIcon />}
          >
            <InnerTextInput
              field={emailField}
              placeHolder="لطفا پست الکترونیکی خود را وارد نمایید"
            />
          </FormField>
        </div>
        <div className="w-full mt-5">
          <FormField
            label="رمز عبور"
            fieldName={passwordField.name}
            fieldError={errors}
            fieldIcon={<LockIcon />}
          >
            <InnerPasswordInput
              field={passwordField}
              placeHolder="لطفا رمز عبور خود را وارد نمایید"
            />
          </FormField>
        </div>
        <div className="w-full mt-5">
          <FormField
            label="تکرار رمز عبور"
            fieldName={confirmPasswordField.name}
            fieldError={errors}
            fieldIcon={<LockIcon />}
          >
            <InnerPasswordInput
              field={confirmPasswordField}
              placeHolder="لطفا رمز عبور خود را مجددا وارد نمایید"
            />
          </FormField>
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <div className="h-[1px] bg-[#D6D6D6]"></div>
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={prevFormStep}
            className="text-base font-bold text-primary"
          >
            مرحله قبل
          </button>
          <PrimaryButton
            type="button"
            className="flex items-center"
            onClick={() => nextFormStep(secondStepFieldNames)}
          >
            <span className="ml-4"> مرحله بعد</span>
            <i>
              <ArrowIcon />
            </i>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
