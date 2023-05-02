import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { FieldValues, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "@components/common/Form/Form";
import { FormField } from "@components/common/FormField/FormField";
import { InnerTextInput } from "@components/common/CustomInputs/InnerTextInput/InnerTextInput";
import { PrimaryButton } from "@components/common/PrimaryButton/PrimaryButton";
import { InnerPasswordInput } from "@components/common/CustomInputs/InnerPasswordInput/InnerPasswordInput";

import { initialLoginValues } from "@core/constants/forms/login-form/login-form.constants";
import { loginFormValidation } from "@core/validations/validation";
import { loginApiHandler } from "@core/utils/login-api-handler/login-api-handler.utils";

import MailIcon from "@assets/icons/messagetext.svg";
import LockIcon from "@assets/icons/lock.svg";
import ArrowIcon from "@assets/icons/arrowleft.svg";

const LoginForm: FC = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: initialLoginValues,
    resolver: yupResolver(loginFormValidation),
  });

  const { field: emailField } = useController({
    name: "email",
    control,
  });

  const { field: passwordField } = useController({
    name: "password",
    control,
  });

  const onSubmit = (data: FieldValues): void => {
    setIsLoading(true);
    try {
      loginApiHandler(data, dispatch, router, setIsLoading);
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      className="w-full h-full flex flex-col items-center"
    >
      <FormField
        label="ایمیل"
        fieldName={emailField.name}
        fieldError={errors}
        fieldIcon={<MailIcon />}
      >
        <InnerTextInput
          field={emailField}
          placeHolder="لطفا پست الکترونیکی خود را وارد نمایید"
        />
      </FormField>
      <div className="w-full mt-5">
        <FormField
          label="رمز عبور"
          fieldName={passwordField.name}
          fieldError={errors}
          fieldIcon={<LockIcon />}
        >
          <InnerPasswordInput
            field={passwordField}
            placeHolder="لطفا رمز عبور خود را وارد نمایید"
          />
        </FormField>
      </div>
      <PrimaryButton
        type={isLoading ? "button" : "submit"}
        className="mt-12 flex items-center"
        disabled={isLoading}
      >
        <span className="ml-4">ورود به حساب</span>
        <i>
          <ArrowIcon />
        </i>
      </PrimaryButton>
    </Form>
  );
};

export { LoginForm };
