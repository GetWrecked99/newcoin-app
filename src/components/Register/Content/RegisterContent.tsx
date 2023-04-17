import { ReactNode } from "react";

import RegisterHeader from "./Header/RegisterHeader";

interface Props {
  children: ReactNode;
  currentFormStep: number;
}

export default function RegisterContent({ children, currentFormStep }: Props) {
  return (
    <div className="h-full flex flex-col p-8 bg-white rounded-e-2xl">
      <RegisterHeader currentFormStep={currentFormStep} />
      <div className="flex flex-col flex-grow">{children}</div>
    </div>
  );
}
