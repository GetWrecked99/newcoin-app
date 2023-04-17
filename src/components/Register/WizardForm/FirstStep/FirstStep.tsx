import InnerTextInput from "@components/common/CustomInputs/InnerTextInput/InnerTextInput";
import FormField from "@components/common/FormField/FormField";
import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";
import { RegisterFormType } from "@core/types/form-types/register-form.types";
import { Control, useController } from "react-hook-form";

import FullNameIcon from "../../../../assets/icons/usersquare.svg";

interface Props {
  control: Control<RegisterFormType>;
  nextFormStep: () => void;
  errors: any;
}

export default function FirstStep({
  control,
  nextFormStep,
  errors,
}: Props): JSX.Element {
  const { field: fullNameField, fieldState: fullNameState } = useController({
    name: "fullName",
    control: control,
  });

  const { field: nationalIdField, fieldState: nationalIdState } = useController(
    {
      name: "nationalId",
      control: control,
    }
  );

  const { field: birthDateField, fieldState: birthDateState } = useController({
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
      </div>
      <div className="flex flex-col">
        <div className="h-[1px] bg-[#D6D6D6]"></div>
        <div className="mt-8 flex items-end justify-end">
          <PrimaryButton onClick={nextFormStep}>مرحله بعد</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
