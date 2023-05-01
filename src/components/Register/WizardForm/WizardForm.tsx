import { FC, useEffect, useState } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";

import { FirstStep } from "@components/Register/WizardForm/FirstStep/FirstStep";
import { SecondStep } from "@components/Register/WizardForm/SecondStep/SecondStep";
import { ThirdStep } from "@components/Register/WizardForm/ThirdStep/ThirdStep";

import { getSeedRandom } from "@core/utils/seed-random/seed-random.utils";
import { getCitiesOfProvinceById } from "@core/utils/iran-city/iran-city.utils";
import {
  comboboxType,
  geoAddressType,
} from "@core/types/constant-types/register/register.types";

interface Props {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  onSubmit: (value: FieldValues) => void;
  formStep: number;
  nextFormStep: (fieldNames: string[]) => Promise<void>;
  prevFormStep: () => void;
}

const WizardForm: FC<Props> = ({
  control,
  errors,
  trigger,
  setValue,
  onSubmit,
  formStep,
  nextFormStep,
  prevFormStep,
}): JSX.Element => {
  /* starts states for second step. these states are here because we dont wanna set their value to their default values after we navigate into another step(couzof unmount). */
  const [optValue, setOptValue] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [storedCode, setStoredCore] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  /* end of the 2nd step states. */

  /* start some handlers for second step. doing that for single responsibility (single source of truth) */
  const sendSmsHandler = async (phoneNumberValue: string) => {
    const res = await trigger("phoneNumber");
    if (res) {
      const randomCode = getSeedRandom(phoneNumberValue, 4).toString();
      setStoredCore(randomCode);
      setIsPhoneNumberValid(true);
      setIsInputDisabled(true);
      alert(randomCode);
    }
  };

  const optHandler = async (phoneNumberValue: string) => {
    if (storedCode == optValue) {
      setValue("securityCode", optValue, { shouldValidate: true });
      setIsPhoneNumberValid(false);
      setIsInputDisabled(true);
      const formattedPhoneNumber = phoneNumberValue.replace(/^0/, "");
      setValue("phoneNumber", formattedPhoneNumber, {
        shouldValidate: false,
        shouldTouch: false,
      });
    }
    await trigger("securityCode");
  };
  /* end of the 2nd step handlers. */

  /* starts states and life cycle for third step as well as we done that for 2nd step in the top */
  const [selectedProvince, setSelectedProvince] =
    useState<geoAddressType>(null);
  const [selectedCity, setSelectedCity] = useState<geoAddressType>(null);
  const [citiesOfProvince, setCitiesOfProvince] = useState<comboboxType[]>([]);
  useEffect(() => {
    if (selectedProvince) {
      const cities = getCitiesOfProvinceById(selectedProvince);
      setCitiesOfProvince(cities);
    }
  }, [selectedProvince]);
  /* enf of it */

  /* handlers for third step */
  const onSelectProvince = (value: comboboxType) => {
    setSelectedProvince(value);
    setValue("province", value);
    setSelectedCity(null);
  };

  const onSelectCity = (value: comboboxType) => {
    setSelectedCity(value);
    setValue("city", value);
  };
  /* end of it */

  const renderStep = (step: number): JSX.Element => {
    switch (step) {
      case 0:
        return (
          <FirstStep
            control={control}
            errors={errors}
            nextFormStep={nextFormStep}
            setValue={setValue}
          />
        );
      case 1:
        return (
          <SecondStep
            control={control}
            errors={errors}
            nextFormStep={nextFormStep}
            prevFormStep={prevFormStep}
            isInputDisabled={isInputDisabled}
            isPhoneNumberValid={isPhoneNumberValid}
            storedCode={storedCode}
            optValue={optValue}
            setOptValue={setOptValue}
            sendSmsHandler={sendSmsHandler}
            optHandler={optHandler}
          />
        );
      default:
        return (
          <ThirdStep
            control={control}
            errors={errors}
            onSubmit={onSubmit}
            prevFormStep={prevFormStep}
            setValue={setValue}
            selectedProvince={selectedProvince}
            onSelectProvince={onSelectProvince}
            selectedCity={selectedCity}
            onSelectCity={onSelectCity}
            citiesOfProvince={citiesOfProvince}
          />
        );
    }
  };

  return renderStep(formStep);
};

export { WizardForm };
