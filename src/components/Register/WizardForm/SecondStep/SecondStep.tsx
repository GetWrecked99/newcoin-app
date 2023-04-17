import {
  Control,
  FieldErrors,
  FieldValues,
  useController,
} from "react-hook-form";

import InnerTextInput from "@components/common/CustomInputs/InnerTextInput/InnerTextInput";
import FormField from "@components/common/FormField/FormField";
import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";

import LockIcon from "@assets/icons/lock.svg";
import InnerPasswordInput from "@components/common/CustomInputs/InnerPasswordInput/InnerPasswordInput";

import PhoneIcon from "@assets/icons/mobile.svg";
import MailIcon from "@assets/icons/messagetext.svg";

interface Props {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  nextFormStep: () => void;
  prevFormStep: () => void;
}

export default function SecondStep({
  control,
  errors,
  nextFormStep,
  prevFormStep,
}: Props) {
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

  return (
    <div className="flex flex-col h-full">
      <div className="w-full max-w-[582px] flex flex-col flex-grow mx-auto">
        <FormField
          label="شماره موبایل"
          fieldName={phoneNumberField.name}
          fieldError={errors}
          fieldIcon={<PhoneIcon />}
        >
          <InnerTextInput
            field={phoneNumberField}
            placeHolder="لطفا شماره خود را وارد نمایید"
          />
        </FormField>
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
      <div className="flex flex-col">
        <div className="h-[1px] bg-[#D6D6D6]"></div>
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={prevFormStep}
            className="text-base font-bold text-primary"
          >
            مرحله قبل
          </button>
          <PrimaryButton type="button" onClick={nextFormStep}>
            مرحله بعد
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
