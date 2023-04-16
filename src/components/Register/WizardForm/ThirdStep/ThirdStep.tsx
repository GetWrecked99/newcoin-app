import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";
import { RegisterFormType } from "@core/types/form-types/register-form.types";
import { Control, useController } from "react-hook-form";

interface Props {
  control: Control<RegisterFormType>;
  prevFormStep: () => void;
  onSubmit: (value: any) => void;
}

export default function ThirdStep({ control, prevFormStep, onSubmit }: Props) {
  const { field: provinceField, fieldState: provinceState } = useController({
    name: "province",
    control: control,
  });

  const { field: cityField, fieldState: cityState } = useController({
    name: "city",
    control: control,
  });

  const { field: addressField, fieldState: addressState } = useController({
    name: "address",
    control: control,
  });

  const { field: latitudeField, fieldState: latitudeState } = useController({
    name: "latitude",
    control: control,
  });

  const { field: longitudeField, fieldState: longitudeState } = useController({
    name: "longitude",
    control: control,
  });
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col flex-grow">333</div>
      <div className="flex flex-col">
        <div className="h-[1px] bg-[#D6D6D6]"></div>
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={prevFormStep}
            className="text-base font-bold text-primary"
          >
            مرحله قبل
          </button>
          <PrimaryButton onSubmit={onSubmit}>ثبت نام</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
