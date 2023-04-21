"use client";

import Link from "next/link";
import Image from "next/image";

import introImage from "@assets/images/login/intro.png";
import logoImage from "@assets/images/common/logo.png";
import { LoginForm } from "@components/Login/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { toast } from "react-toastify";
import { AppState } from "@core/redux/store/store";

export default function Login(): JSX.Element | null {
  const { AuthData } = useSelector((state: AppState) => state.AuthData);
  const router = useRouter();

  useEffect(() => {
    if (AuthData) {
      router.push("/userpanel/dashboard");
      toast.info("هم اکنون در حساب کاربری خود هستید.");
    }
  }, []);

  if (AuthData) {
    return null;
  }

  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2 rounded-2xl">
      <div className="h-full flex flex-col justify-start items-center bg-primary rounded-s-2xl">
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
      <div className="h-full flex flex-col justify-start items-center bg-white rounded-e-2xl">
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
        <div className="w-full max-w-[582px] flex flex-col flex-grow">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
