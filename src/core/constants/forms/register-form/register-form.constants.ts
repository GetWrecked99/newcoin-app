import { RegisterFormType } from "@core/types/form-types/register-form.types";

export const initialRegisterValues: RegisterFormType = {
  fullName: "",
  nationalId: "",
  birthDate: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  email: "",
  province: null,
  city: null,
  address: "",
  latitude: "",
  longitude: "",
  securityCode: "",
};

export const firstStepFieldNames: string[] = [
  "fullName",
  "nationalId",
  "birthDate",
];

export const secondStepFieldNames: string[] = [
  "phoneNumber",
  "email",
  "password",
  "confirmPassword",
  "securityCode",
];

export const thirdStepFieldNames: string[] = [
  "province",
  "city",
  "address",
  "latitude",
  "longitude",
];
