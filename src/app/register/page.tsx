"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import RegisterSidebar from "@components/Register/Sidebar/RegisterSidebar";
import RegisterContent from "@components/Register/Content/RegisterContent";
import { Form } from "@components/common/Form/Form";
import WizardForm from "@components/Register/WizardForm/WizardForm";

import { initialRegisterValues } from "@core/constants/forms/register-form/register-form.constants";
import { registerFormValidation } from "@core/validations/validation";

export default function Register() {
  const [formStep, setFormStep] = useState(2);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<FieldValues>({
    mode: "onSubmit",
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
              <WizardForm
                control={control}
                errors={errors}
                trigger={trigger}
                setValue={setValue}
                onSubmit={onSubmit}
                formStep={formStep}
                nextFormStep={nextFormStep}
                prevFormStep={prevFormStep}
              />
            </Form>
          </div>
        </RegisterContent>
      </div>
    </div>
  );
}
