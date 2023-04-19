import { useState } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";

import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";

import { getSeedRandom } from "@core/utils/seed-random/seed-random.utils";

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

export default function WizardForm({
  control,
  errors,
  trigger,
  setValue,
  onSubmit,
  formStep,
  nextFormStep,
  prevFormStep,
}: Props) {
  /* starts states for second step. these states are here because we dont wanna set their value to their default values after we navigate into another step(couzof unmount). */
  const [optValue, setOptValue] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [storedCode, setStoredCore] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  /* end of the 2nd step states. */

  /* start some handlers for second step. doing that for single responsibility (single source of truth) */
  const sendSmsHandler = async (phoneNumber: string) => {
    const res = await trigger("phoneNumber");
    if (res) {
      const randomCode = getSeedRandom(phoneNumber, 4).toString();
      setStoredCore(randomCode);
      setIsPhoneNumberValid(true);
      setIsInputDisabled(true);
      alert(randomCode);
    }
  };

  const optHandler = async () => {
    if (storedCode == optValue) {
      setValue("securityCode", optValue, { shouldValidate: true });
      setIsPhoneNumberValid(false);
      setIsInputDisabled(true);
    }
    await trigger("securityCode");
  };
  /* end of the 2nd step handlers. */

  return (
    <>
      {formStep === 0 ? (
        <FirstStep
          control={control}
          errors={errors}
          nextFormStep={nextFormStep}
          setValue={setValue}
        />
      ) : formStep === 1 ? (
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
      ) : (
        <ThirdStep
          control={control}
          errors={errors}
          onSubmit={onSubmit}
          prevFormStep={prevFormStep}
          setValue={setValue}
        />
      )}
    </>
  );
}
