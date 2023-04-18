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
