import { Dispatch, ReactNode, SetStateAction } from "react";

interface Props {
  children: ReactNode;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function PanelContent({ children, setSidebarOpen }: Props) {
  return (
    <div className="flex flex-col flex-grow gap-y-[18px]">
      <div className="h-[80px] 2xl:h-[100px] rounded-2xl bg-white">
        <button
          type="button"
          className="border-r border-base-200 px-4 text-contentlg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-theme-500 xl:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          icon
        </button>
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto">{children}</div>
    </div>
  );
}
