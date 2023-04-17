"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Form } from "@components/common/Form/Form";
import RegisterSidebar from "@components/Register/Sidebar/RegisterSidebar";
import RegisterContent from "@components/Register/Content/RegisterContent";
import FirstStep from "@components/Register/WizardForm/FirstStep/FirstStep";
import SecondStep from "@components/Register/WizardForm/SecondStep/SecondStep";
import ThirdStep from "@components/Register/WizardForm/ThirdStep/ThirdStep";

import { initialRegisterValues } from "@core/constants/forms/register-form/register-form.constants";

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
  } = useForm({
    defaultValues: initialRegisterValues,
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="h-full overflow-hidden grid grid-cols-5 rounded-2xl">
      <RegisterSidebar currentFormStep={formStep} />
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
              />
            ) : formStep === 1 ? (
              <SecondStep
                control={control}
                nextFormStep={nextFormStep}
                prevFormStep={prevFormStep}
              />
            ) : (
              <ThirdStep
                control={control}
                onSubmit={onSubmit}
                prevFormStep={prevFormStep}
              />
            )}
          </Form>
        </div>
      </RegisterContent>
    </div>
  );
}
