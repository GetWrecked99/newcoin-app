export type RegisterFormType = {
  fullName: string;
  nationalId: string;
  birthDate: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  email: string;
  province: { id: number; name: string } | null;
  city: { id: number; name: string } | null;
  address: string;
  latitude: string;
  longitude: string;
  securityCode: string;
};
