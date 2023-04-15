import Image from "next/image";
import logoImage from "@assets/images/login/logo.png";

export default function RegisterSidebar() {
  return (
    <div className="h-full flex flex-col bg-primary p-8">
      <figure className="mr-2 mt-2">
        <Image src={logoImage} alt="NewCoin Logo" />
      </figure>
      <h1 className="mt-3 text-4xl font-black text-white text-center">
        ثبت نام
      </h1>
      <ol className="flex flex-col items-start mt-[90px]">
        <li className="flex flex-row items-center justify-start">
          <div className="w-8 h-8 border-[3px] ml-[26px] border-white bg-[#9CC4F2] rounded-full"></div>
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">اطلاعات فردی</span>
          </div>
        </li>
        <li className="my-3 w-0.5 h-[34px] bg-white"></li>
        <li>2</li>
        <li>3</li>
      </ol>
    </div>
  );
}
