import InnerTextInput from "@components/common/CustomInputs/InnerTextInput/InnerTextInput";
import FormField from "@components/common/FormField/FormField";
import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";

import {
  Control,
  FieldErrors,
  FieldValues,
  useController,
} from "react-hook-form";

import LocationIcon from "@assets/icons/location.svg";
import AddressIcon from "@assets/icons/address.svg";

interface Props {
  control: Control<FieldValues>;
  prevFormStep: () => void;
  onSubmit: (value: FieldValues) => void;
  errors: FieldErrors<FieldValues>;
}

export default function ThirdStep({
  control,
  prevFormStep,
  onSubmit,
  errors,
}: Props) {
  const { field: provinceField } = useController({
    name: "province",
    control: control,
  });

  const { field: cityField } = useController({
    name: "city",
    control: control,
  });

  const { field: addressField } = useController({
    name: "address",
    control: control,
  });

  const { field: latitudeField } = useController({
    name: "latitude",
    control: control,
  });

  const { field: longitudeField } = useController({
    name: "longitude",
    control: control,
  });
  return (
    <div className="flex flex-col h-full">
      <div className="w-full max-w-[660px] flex-grow mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
          <FormField
            label="استان"
            fieldName={provinceField.name}
            fieldError={errors}
            fieldIcon={<LocationIcon />}
          >
            <InnerTextInput field={provinceField} placeHolder="انتخاب استان" />
          </FormField>
          <FormField
            label="شهر"
            fieldName={cityField.name}
            fieldError={errors}
            fieldIcon={<LocationIcon />}
          >
            <InnerTextInput field={cityField} placeHolder="انتخاب شهر" />
          </FormField>
          <div className="md:col-span-2">
            <FormField
              label="آدرس"
              fieldName={addressField.name}
              fieldError={errors}
              fieldIcon={<AddressIcon />}
            >
              <InnerTextInput
                field={addressField}
                placeHolder="لطفا آدرس خود را وارد نمایید"
              />
            </FormField>
          </div>
          <FormField
            label="طول جغرافیایی"
            fieldName={longitudeField.name}
            fieldError={errors}
            fieldIcon={<LocationIcon />}
          >
            <InnerTextInput field={longitudeField} placeHolder="محل سکونت" />
          </FormField>
          <FormField
            label="عرض جغرافیایی"
            fieldName={latitudeField.name}
            fieldError={errors}
            fieldIcon={<LocationIcon />}
          >
            <InnerTextInput field={latitudeField} placeHolder="محل سکونت" />
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
          <PrimaryButton type="submit" onSubmit={onSubmit}>
            ثبت نام
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
