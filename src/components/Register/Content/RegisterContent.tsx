import { FC, ReactNode } from "react";

import { RegisterHeader } from "@components/Register/Content/Header/RegisterHeader";

interface Props {
  children: ReactNode;
  currentFormStep: number;
}

const RegisterContent: FC<Props> = ({
  children,
  currentFormStep,
}): JSX.Element => {
  return (
    <div className="h-full flex flex-col p-8 bg-white rounded-2xl xl:rounded-s-none xl:rounded-e-2xl">
      <RegisterHeader currentFormStep={currentFormStep} />
      <div className="flex flex-col flex-grow">{children}</div>
    </div>
  );
};

export { RegisterContent };
