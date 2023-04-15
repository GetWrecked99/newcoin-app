import { ReactNode } from "react";

import RegisterHeader from "./Header/RegisterHeader";

interface Props {
  children: ReactNode;
}

export default function RegisterContent({ children }: Props) {
  return (
    <div className="col-span-4 flex flex-col p-8 bg-white">
      {/* heading section and stepper information .., this component must be client component ! */}
      <RegisterHeader />
      <div className="flex flex-col flex-grow">{children}</div>
    </div>
  );
}
