"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { Form } from "@components/common/Form/Form";
import RegisterSidebar from "@components/Register/Sidebar/RegisterSidebar";
import RegisterContent from "@components/Register/Content/RegisterContent";
import FirstStep from "@components/Register/WizardForm/FirstStep/FirstStep";
import SecondStep from "@components/Register/WizardForm/SecondStep/SecondStep";
import ThirdStep from "@components/Register/WizardForm/ThirdStep/ThirdStep";

import { initialRegisterValues } from "@core/constants/forms/register-form/register-form.constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormValidation } from "@core/validations/validation";
import { RegisterFormType } from "@core/types/form-types/register-form.types";
import { getSeedRandom } from "@core/utils/seed-random/seed-random.utils";

export default function Register() {
  const [formStep, setFormStep] = useState(0);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
    trigger,
  } = useForm<FieldValues>({
    mode: "all",
    defaultValues: initialRegisterValues,
    resolver: yupResolver(registerFormValidation),
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  const nextFormStep = async (fieldNames: string[]) => {
    const res = await trigger(fieldNames);
    if (res) {
      setFormStep((currentStep) => currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevFormStep = () => {
    setFormStep((currentStep) => currentStep - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <div className="h-full grid grid-cols-5 rounded-2xl">
      <div className="hidden xl:block">
        <RegisterSidebar currentFormStep={formStep} />
      </div>
      <div className="col-span-5 xl:col-span-4">
        <RegisterContent currentFormStep={formStep + 1}>
          <div className="flex flex-col flex-grow">
            <Form
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              className="h-full"
            >
              {formStep === 0 ? (
                <FirstStep
                  control={control}
                  errors={errors}
                  nextFormStep={nextFormStep}
                  setValue={setValue}
                  getValues={getValues}
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
            </Form>
          </div>
        </RegisterContent>
      </div>
    </div>
  );
}
