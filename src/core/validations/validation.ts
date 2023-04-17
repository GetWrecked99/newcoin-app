import * as Yup from "yup";

const fullNameValidation = Yup.string()
  .required("پر کردن این فیلد الزامیست !")
  .matches(
    /^([\u0600-\u06FF\s]*|[a-zA-Z\s]*)$/,
    "نام و نام خانوادگی باید فقط با حروف فارسی یا انگلیسی وارد شود !"
  )
  .min(3, "نام و نام خانوادگی باید حداقل دارای 3 کاراکتر باشد !")
  .max(30, "نام و نام خانوادگی باید حداکثر دارای 30 کاراکتر باشد !");

const emailValidation = Yup.string()
  .email("لطفا یک پست الکترونیکی معتبر وارد کنید !")
  .required("پر کردن این فیلد الزامیست !");

const nationalIdValidation = Yup.string()
  .required("پر کردن این فیلد الزامیست !")
  .matches(/^[1-9]\d{9}$/, "لطفا یک کد ملی معتبر وارد کنید");

const phoneNumberValidation = Yup.string()
  .required("پر کردن این فیلد الزامیست !")
  .matches(
    /^09(0[1-5]|[1 3]\d|2[0-2]|98|90)\d{7}$/,
    "لطفا یک شماره موبایل معتبر کشور ایران را وارد کنید !"
  );

const passwordValidation = Yup.string()
  .required("پر کردن این فیلد الزامیست !")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/,
    "رمز عبور باید بین ۸ تا ۳۲ حرف و ترکیبی از اعداد، حروف انگلیسی، علائم اشاره و حداقل یک حرف کپیتال باشد !"
  );

const passwordConfirmation = Yup.string()
  .required("پر کردن این فیلد الزامیست !")
  .oneOf([Yup.ref("password")], "رمز عبور با تکرار آن مطابقت ندارد !");

const birthDateValidation = Yup.string().required(
  "پر کردن این فیلد الزامیست !"
);

const addressValidation = Yup.string().required("پر کردن این فیلد الزامیست !");

const codeValidation = Yup.string().required("کد تایید نامعتبر است !");

const latitudeValidation = Yup.string().required("پر کردن این فیلد الزامیست !");

const longitudeValidation = Yup.string().required(
  "پر کردن این فیلد الزامیست !"
);

const provinceValidation = Yup.string().required("پر کردن این فیلد الزامیست !");

const cityValidation = Yup.string().required("پر کردن این فیلد الزامیست !");

export const loginFormValidation = Yup.object({
  email: emailValidation,
  password: Yup.string().required("لطفا رمز عبور خود را وارد نمایید !"),
});

export const registerFormValidation = Yup.object({
  fullName: fullNameValidation,
  email: emailValidation,
  nationalId: nationalIdValidation,
  phoneNumber: phoneNumberValidation,
  address: addressValidation,
  latitude: latitudeValidation,
  longitude: longitudeValidation,
  province: provinceValidation,
  city: cityValidation,
  //   password: passwordValidation,
  //   passwordConfirmation: passwordConfirmation,
  birthDate: birthDateValidation,
  //   securityCode : codeValidation
});
