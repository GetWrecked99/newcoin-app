import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

import { AppState } from "@core/redux/store/store";

import userImage from "@assets/images/common/user.png";

interface Props {
  children: ReactNode;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const PanelContent: FC<Props> = ({ children, setSidebarOpen }): JSX.Element => {
  const { AuthData } = useSelector((state: AppState) => state.AuthData);
  return (
    <div className="flex flex-grow">
      <div className="flex flex-col h-full w-full gap-y-[18px]">
        <div className="flex flex-row items-center justify-between py-4 2xl:py-6 px-4 2xl:px-6 rounded-2xl bg-white">
          <div className="w-6 h-6 bg-transparent hidden xl:block"></div>
          <button
            type="button"
            className="border-r border-base-200 text-contentlg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-theme-500 xl:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <AiOutlineMenu className="w-6 h-6" />
          </button>
          {AuthData && (
            <div
              dir="ltr"
              className="flex gap-x-5 flex-start items-center text-xs font-bold"
            >
              <figure className="w-12 h-12 rounded-full">
                <Image src={userImage} alt="user image" />
              </figure>
              <span className="text-base font-serif">{AuthData.name}</span>
            </div>
          )}
        </div>
        <div className="flex-grow overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export { PanelContent };
