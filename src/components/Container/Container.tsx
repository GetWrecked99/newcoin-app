import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="h-screen p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 bg-[#E8F4FF]">
      {children}
    </div>
  );
}
