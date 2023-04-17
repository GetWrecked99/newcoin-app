import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="min-w-[480px] h-[836px] 2xl:h-[929px] p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-11 bg-[#E8F4FF]">
      {children}
    </div>
  );
}
