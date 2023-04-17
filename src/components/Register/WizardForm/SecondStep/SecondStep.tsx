import InnerTextInput from "@components/common/CustomInputs/InnerTextInput/InnerTextInput";
import FormField from "@components/common/FormField/FormField";
import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";
import { RegisterFormType } from "@core/types/form-types/register-form.types";
import {
  Control,
  FieldErrors,
  FieldValues,
  useController,
} from "react-hook-form";

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
        <div className="mt-12">
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
