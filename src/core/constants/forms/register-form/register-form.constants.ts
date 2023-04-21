import { RegisterFormType } from "@core/types/form-types/register-form.types";

const initialRegisterValues: RegisterFormType = {
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

const firstStepFieldNames: string[] = ["fullName", "nationalId", "birthDate"];

const secondStepFieldNames: string[] = [
  "phoneNumber",
  "email",
  "password",
  "confirmPassword",
  "securityCode",
];

const thirdStepFieldNames: string[] = [
  "province",
  "city",
  "address",
  "latitude",
  "longitude",
];

export {
  initialRegisterValues,
  firstStepFieldNames,
  secondStepFieldNames,
  thirdStepFieldNames,
};
