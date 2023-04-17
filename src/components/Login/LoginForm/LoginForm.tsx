"use client";

import { Form } from "@components/common/Form/Form";
import FormField from "@components/common/FormField/FormField";
import { initialLoginValues } from "@core/constants/forms/login-form/login-form.constants";
import { loginFormValidation } from "@core/validations/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useController, useForm } from "react-hook-form";
import InnerTextInput from "@components/common/CustomInputs/InnerTextInput/InnerTextInput";
import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";
import React from "react";

import MailIcon from "@assets/icons/messagetext.svg";

export default function LoginForm() {
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
    control: control,
  });

  const onSubmit = (data: FieldValues) => console.log(data);

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
      <PrimaryButton type="submit" className="mt-12">
        ورود
      </PrimaryButton>
    </Form>
  );
}
