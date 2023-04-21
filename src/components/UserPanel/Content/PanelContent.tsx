import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";

import { AppState } from "@core/redux/store/store";

interface Props {
  children: ReactNode;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const PanelContent: FC<Props> = ({ children, setSidebarOpen }): JSX.Element => {
  const { AuthData } = useSelector((state: AppState) => state.AuthData);
  return (
    <div className="flex flex-grow">
      <div className="flex flex-col h-full w-full gap-y-[18px]">
        <div className="flex flex-row items-center justify-between py-10 2xl:py-10 px-4 rounded-2xl bg-white">
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
              className="flex gap-x-5 flex-start text-xs font-bold"
            >
              <span>
                Your Username is <mark>{(AuthData as any).name}</mark>
              </span>
              &&
              <span>
                Your Email is <mark>{(AuthData as any).email}</mark>
              </span>
            </div>
          )}
        </div>
        <div className="flex-grow overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export { PanelContent };
