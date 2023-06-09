import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { sidebarNavigation } from "@core/constants/userpanel-page/sidebar/sidebar.constants";

import LogoIcon from "@assets/images/common/logo.png";

interface Props {
  pathName: string | null;
  onUserExit: () => void;
}

const PanelSidebar: FC<Props> = ({ pathName, onUserExit }): JSX.Element => {
  return (
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
          <h2 className="text-xl 2xl:text-2xl font-black text-[#1E1E1E] mb-4">
            نیوکوین اسپیس
          </h2>
          <div className="w-full h-[1px] bg-[#D6D6D6]"></div>
        </div>
        <nav className="mt-6 flex-1 px-2 space-y-1">
          {sidebarNavigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`group flex items-center px-[18px] py-[10px] text-base font-bold rounded-2xl ${
                pathName === item.href
                  ? "bg-primary text-white"
                  : "hover:bg-primary/10"
              }`}
              onClick={() => {
                if (item.href === "/") {
                  onUserExit();
                }
              }}
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
  );
};

export { PanelSidebar };
