import Image from "next/image";
import Link from "next/link";

import { sidebarNavigation } from "@core/constants/userpanel-page/sidebar/sidebar.constants";

import LogoIcon from "@assets/images/common/logo.png";

interface Props {
  pathName: string | null;
}

export default function PanelSidebar({ pathName }: Props) {
  return (
    <div className="hidden lg:flex md:flex-col w-[250px] md:overflow-hidden bg-white rounded-2xl py-4 px-7">
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-shrink-0 flex flex-col items-center">
            <Image
              src={LogoIcon}
              alt="NewCoin Logo"
              width={58}
              height={54}
              className="mb-4"
            />
            <h2 className="text-xl font-black text-[#1E1E1E] mb-4">
              نیوکوین اسپیس
            </h2>
            <div className="w-full h-[1px] bg-[#D6D6D6]"></div>
          </div>
          <nav className="mt-6 flex-1 px-2 space-y-1">
            {sidebarNavigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`group flex items-center px-[18px] py-[10px] text-sm font-bold rounded-2xl ${
                  pathName === item.href
                    ? " bg-primary text-white"
                    : "text-base hover:bg-primary/10"
                }`}
              >
                <item.icon
                  className={`ml-[18px] flex-shrink-0 h-6 w-6 ${
                    pathName === item.href ? "text-white" : "text-black"
                  }`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
