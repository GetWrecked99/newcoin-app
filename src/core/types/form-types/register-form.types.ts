import { geoAddressType } from "../constant-types/register/register.types";

export type RegisterFormType = {
  fullName: string;
  nationalId: string;
  birthDate: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  email: string;
  province: geoAddressType;
  city: geoAddressType;
  address: string;
  latitude: string;
  longitude: string;
  securityCode: string;
};
