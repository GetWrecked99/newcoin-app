import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormSetValue,
  useController,
} from "react-hook-form";

import { InnerTextInput } from "@components/common/CustomInputs/InnerTextInput/InnerTextInput";
import { FormField } from "@components/common/FormField/FormField";
import { PrimaryButton } from "@components/common/PrimaryButton/PrimaryButton";
import { InnerNationalIdInput } from "@components/common/CustomInputs/InnerNationalIdInput/InnerNationalIdInput";
import { InnerDatePicker } from "@components/common/CustomInputs/InnerDatePicker/InnerDatePicker";

import { firstStepFieldNames } from "@core/constants/forms/register-form/register-form.constants";

import FullNameIcon from "@assets/icons/usersquare.svg";
import NationalIdIcon from "@assets/icons/card.svg";
import BirthDateIcon from "@assets/icons/calendar.svg";
import ArrowIcon from "@assets/icons/arrowleft.svg";
import { FC } from "react";

interface Props {
  control: Control<FieldValues>;
  nextFormStep: (fieldNames: string[]) => Promise<void>;
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const FirstStep: FC<Props> = ({
  control,
  nextFormStep,
  errors,
  setValue,
}): JSX.Element => {
  const { field: fullNameField } = useController({
    name: "fullName",
    control: control,
  });

  const { field: nationalIdField } = useController({
    name: "nationalId",
    control: control,
  });

  const { field: birthDateField } = useController({
    name: "birthDate",
    control: control,
  });

  return (
    <div className="flex flex-col h-full">
      <div className="w-full max-w-[582px] flex flex-col flex-grow mx-auto">
        <FormField
          label="نام و نام خانوادگی"
          fieldName={fullNameField.name}
          fieldError={errors}
          fieldIcon={<FullNameIcon />}
        >
          <InnerTextInput
            field={fullNameField}
            placeHolder="لطفا نام و نام خانوادگی خود را وارد نمایید"
          />
        </FormField>
        <div className="mt-10">
          <FormField
            label="کد ملی"
            fieldName={nationalIdField.name}
            fieldError={errors}
            fieldIcon={<NationalIdIcon />}
          >
            <InnerNationalIdInput
              field={nationalIdField}
              setValue={setValue}
              placeHolder="لطفا کد ملی خود را وارد نمایید"
            />
          </FormField>
        </div>
        <div className="mt-10">
          <FormField
            label="تاریخ تولد"
            fieldName={birthDateField.name}
            fieldError={errors}
            fieldIcon={<BirthDateIcon />}
          >
            <InnerDatePicker
              field={birthDateField}
              setValue={setValue}
              placeHolder="لطفا تاریخ تولد خود را وارد نمایید"
            />
          </FormField>
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <div className="h-[1px] bg-[#D6D6D6]"></div>
        <div className="mt-8 flex items-end justify-end">
          <PrimaryButton
            type="button"
            className="flex items-center"
            onClick={() => nextFormStep(firstStepFieldNames)}
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
};

export { FirstStep };
