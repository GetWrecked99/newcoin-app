import Link from "next/link";
import Image from "next/image";

import introImage from "@assets/images/login/intro.png";
import logoImage from "@assets/images/login/logo.png";

export default function Login() {
  return (
    <div
      className="h-full
     overflow-hidden grid grid-cols-1 lg:grid-cols-2 rounded-2xl"
    >
      <div className="h-full flex flex-col justify-start items-center bg-primary">
        <h1 className="mt-[85px] text-4xl font-black text-white ">
          صرافی ارز دیجیتال نیوکوین اسپیس
        </h1>
        <p className="mt-[21px] text-xl font-medium text-center text-white">
          خرید و فروش امن بیت‌کوین و ارزهای دیجیتال <br /> به بزرگترین بازار ارز
          دیجیتال ایران بپیوندید
        </p>
        <figure className="mt-[77px]">
          <Image src={introImage} alt="NewCoin Intro" />
        </figure>
      </div>
      <div className="h-full flex flex-col justify-start items-center bg-white">
        <figure className="mt-[88px]">
          <Image src={logoImage} alt="NewCoin Logo" />
        </figure>
        <h2 className="mt-[20px] text-[40px] font-black text-[#000000]">
          ورود به داشبورد
        </h2>
        <Link
          href={"/register"}
          className="mt-[11px] mb-[62px] text-xl font-bold text-primary"
        >
          هنوز ثبت نام نکرده‌اید؟
        </Link>
        {/* Form and inputs for loggin-in are inside of LoginForm Component */}
        {/* <LoginForm /> */}
      </div>
    </div>
  );
}
