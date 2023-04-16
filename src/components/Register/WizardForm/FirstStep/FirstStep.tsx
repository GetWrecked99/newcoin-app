import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";
import { RegisterFormType } from "@core/types/form-types/register-form.types";
import { Control, useController } from "react-hook-form";

interface Props {
  control: Control<RegisterFormType>;
  nextFormStep: () => void;
}

export default function FirstStep({
  control,
  nextFormStep,
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
      <div className="flex flex-col flex-grow"></div>
      <div className="flex flex-col">
        <div className="h-[1px] bg-[#D6D6D6]"></div>
        <div className="mt-8 flex items-end justify-end">
          <PrimaryButton onClick={nextFormStep}>مرحله بعد</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
