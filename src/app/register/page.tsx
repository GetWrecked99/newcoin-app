"use client";

import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { RegisterSidebar } from "@components/Register/Sidebar/RegisterSidebar";
import { RegisterContent } from "@components/Register/Content/RegisterContent";
import { Form } from "@components/common/Form/Form";
import { WizardForm } from "@components/Register/WizardForm/WizardForm";

import { initialRegisterValues } from "@core/constants/forms/register-form/register-form.constants";
import { registerFormValidation } from "@core/validations/validation";
import { AppState } from "@core/redux/store/store";
import { RoutesEnum } from "@core/enums/routes/routes.enums";
import { scrollToTop } from "@core/utils/scroll-to-top/scroll-to-top.utils";
import { ToastMessagesEnum } from "@core/enums/toast-messages/toast-messages.enums";
import { registerApiHandler } from "@core/utils/register-api-handler/register-api-handler.utils";

export default function Register(): JSX.Element | null {
  const { AuthData } = useSelector((state: AppState) => state.AuthData);
  const [formStep, setFormStep] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
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

  useEffect(() => {
    if (AuthData) {
      router.push(RoutesEnum.DashboardPage);
      toast.info(ToastMessagesEnum.AlreadyLoggedIn);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (AuthData) {
    return null;
  }

  const onSubmit = (data: FieldValues) => {
    setIsLoading(true);
    const requiredData = {
      name: data.fullName,
      email: data.email,
      phone: data.phoneNumber,
      password: data.password,
      password_confirmation: data.confirmPassword,
    };
    try {
      registerApiHandler(requiredData, router, setIsLoading);
    } catch (error) {
      console.error(error);
    }
  };

  const nextFormStep = async (fieldNames: string[]) => {
    const res = await trigger(fieldNames);
    if (res) {
      setFormStep((currentStep) => currentStep + 1);
      scrollToTop();
    }
  };

  const prevFormStep = () => {
    setFormStep((currentStep) => currentStep - 1);
    scrollToTop();
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
                formStep={formStep}
                nextFormStep={nextFormStep}
                prevFormStep={prevFormStep}
                isLoading={isLoading}
              />
            </Form>
          </div>
        </RegisterContent>
      </div>
    </div>
  );
}
