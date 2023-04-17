import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";
import { RegisterFormType } from "@core/types/form-types/register-form.types";
import { Control, FieldValues, useController } from "react-hook-form";

interface Props {
  control: Control<FieldValues>;
  nextFormStep: () => void;
  prevFormStep: () => void;
}

export default function SecondStep({
  control,
  nextFormStep,
  prevFormStep,
}: Props) {
  const { field: phoneNumberField, fieldState: phoneNumberState } =
    useController({
      name: "phoneNumber",
      control: control,
    });

  const { field: emailField, fieldState: emailState } = useController({
    name: "email",
    control: control,
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col flex-grow">2222</div>
      <div className="flex flex-col">
        <div className="h-[1px] bg-[#D6D6D6]"></div>
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={prevFormStep}
            className="text-base font-bold text-primary"
          >
            مرحله قبل
          </button>
          <PrimaryButton onClick={nextFormStep}>مرحله بعد</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
