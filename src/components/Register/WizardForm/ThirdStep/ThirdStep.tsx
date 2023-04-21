import { FC, useState } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormSetValue,
  useController,
} from "react-hook-form";

import { InnerTextInput } from "@components/common/CustomInputs/InnerTextInput/InnerTextInput";
import { FormField } from "@components/common/FormField/FormField";
import { PrimaryButton } from "@components/common/PrimaryButton/PrimaryButton";
import { InnerComboBox } from "@components/common/CustomInputs/InnerComboBox/InnerComboBox";
import { Modal } from "@components/common/Modal/Modal";
import { CustomMap } from "@components/Register/WizardForm/ThirdStep/CustomMap/CustomMap";

import { formattedProvinces } from "@core/utils/iran-city/iran-city.utils";
import {
  comboboxType,
  geoAddressType,
} from "@core/types/constant-types/register/register.types";

import ArrowIcon from "@assets/icons/arrowleft.svg";
import LocationIcon from "@assets/icons/location.svg";
import AddressIcon from "@assets/icons/address.svg";

interface Props {
  control: Control<FieldValues>;
  prevFormStep: () => void;
  onSubmit: (value: FieldValues) => void;
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  selectedProvince: geoAddressType;
  onSelectProvince: (value: comboboxType) => void;
  selectedCity: geoAddressType;
  onSelectCity: (value: comboboxType) => void;
  citiesOfProvince: comboboxType[];
}

const ThirdStep: FC<Props> = ({
  control,
  prevFormStep,
  onSubmit,
  errors,
  setValue,
  selectedProvince,
  onSelectProvince,
  selectedCity,
  onSelectCity,
  citiesOfProvince,
}): JSX.Element => {
  const allProvinces = formattedProvinces();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [mapPosition, setMapPosition] = useState({
    lat: 36.5659,
    lng: 53.0586,
  });

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

  const onSubmitPosition = (): void => {
    setValue(latitudeField.name, mapPosition.lat);
    setValue(longitudeField.name, mapPosition.lng);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="w-full max-w-[660px] flex-grow mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
          <FormField
            label="استان"
            fieldName={provinceField.name}
            fieldError={errors}
            fieldIcon={<LocationIcon />}
          >
            <InnerComboBox
              optionsList={allProvinces}
              selectedOption={selectedProvince}
              setSelectedOption={onSelectProvince}
              placeHolder="انتخاب استان"
            />
          </FormField>
          <FormField
            label="شهر"
            fieldName={cityField.name}
            fieldError={errors}
            fieldIcon={<LocationIcon />}
          >
            <InnerComboBox
              optionsList={citiesOfProvince}
              selectedOption={selectedCity}
              setSelectedOption={onSelectCity}
              placeHolder="انتخاب شهر"
            />
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
          <div className="md:col-span-2 flex justify-center">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-base font-bold text-primary"
            >
              انتخاب طول و عرض جغرافیایی از روی نقشه
            </button>
            <Modal
              isModalOpen={isModalOpen}
              closeModal={() => setIsModalOpen(false)}
            >
              <div className="relative h-[400px]">
                <CustomMap
                  position={mapPosition}
                  setPosition={setMapPosition}
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row gap-x-4 z-[400]">
                  <PrimaryButton
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-[#B4B4B4]"
                  >
                    بستن
                  </PrimaryButton>
                  <PrimaryButton
                    type="button"
                    onClick={onSubmitPosition}
                    className="!bg-[#EA8E38] flex items-center"
                  >
                    <span className="ml-4"> ثبت موقعیت</span>
                    <i>
                      <ArrowIcon />
                    </i>
                  </PrimaryButton>
                </div>
              </div>
            </Modal>
          </div>
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
          <PrimaryButton className="flex items-center" onSubmit={onSubmit}>
            <span className="ml-4">ثبت نام</span>
            <i>
              <ArrowIcon />
            </i>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export { ThirdStep };
