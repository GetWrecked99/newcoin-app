import { ReactNode } from "react";

import RegisterSidebar from "@components/Register/Sidebar/RegisterSidebar";
import RegisterContent from "@components/Register/RegisterContent/RegisterContent";

interface RegisterLayoutProps {
  children: ReactNode;
}

export default function RegisterLayout({
  children,
}: RegisterLayoutProps): JSX.Element {
  return (
    <>
      <div className="h-[838px] overflow-hidden grid grid-cols-5 rounded-2xl">
        <RegisterSidebar />
        <RegisterContent>{children}</RegisterContent>
      </div>
    </>
  );
}
