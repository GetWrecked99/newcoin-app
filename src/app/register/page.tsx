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

export default function Register() {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => {
    setFormStep((currentStep) => currentStep + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevFormStep = () => {
    setFormStep((currentStep) => currentStep - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FieldValues>({
    defaultValues: initialRegisterValues,
    resolver: yupResolver(registerFormValidation),
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div className="h-full overflow-hidden grid grid-cols-5 rounded-2xl">
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
                />
              ) : (
                <ThirdStep
                  control={control}
                  errors={errors}
                  onSubmit={onSubmit}
                  prevFormStep={prevFormStep}
                />
              )}
            </Form>
          </div>
        </RegisterContent>
      </div>
    </div>
  );
}
