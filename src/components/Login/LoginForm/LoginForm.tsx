import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { FieldValues, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loggedIn } from "@app/GlobalRedux/redux-store/auth/auth.slice";
import { Form } from "@components/common/Form/Form";
import FormField from "@components/common/FormField/FormField";
import InnerTextInput from "@components/common/CustomInputs/InnerTextInput/InnerTextInput";
import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";
import InnerPasswordInput from "@components/common/CustomInputs/InnerPasswordInput/InnerPasswordInput";

import { loginUser } from "@core/services/api/authentication/login.api";
import { setItem } from "@core/services/storage/localStorage";
import { initialLoginValues } from "@core/constants/forms/login-form/login-form.constants";
import { loginFormValidation } from "@core/validations/validation";

import MailIcon from "@assets/icons/messagetext.svg";
import LockIcon from "@assets/icons/lock.svg";
import ArrowIcon from "@assets/icons/arrowleft.svg";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();

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

  const { field: passwordField } = useController({
    name: "password",
    control: control,
  });
  const onSubmit = (data: FieldValues) => {
    try {
      const loginApiHandler = async () => {
        // starts loading here and keep disablaing login button
        const studentLogin = await loginUser(data);
        if (studentLogin) {
          // toast and loading here ...
          dispatch(loggedIn(studentLogin.result));
          setItem("token", studentLogin.token);
          router.push("/userpanel/dashboard");
          toast.success("با موفقیت وارد شدید.");
        }
      };
      loginApiHandler();
    } catch (error: any) {
      toast.error(error.response.data.message || error.message);
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
      <PrimaryButton type="submit" className="mt-12 flex items-center">
        <span className="ml-4">ورود به حساب</span>
        <i>
          <ArrowIcon />
        </i>
      </PrimaryButton>
    </Form>
  );
}
