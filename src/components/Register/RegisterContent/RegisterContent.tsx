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
      {/* children represets for diffrent steps of the wizzardy form */}
      <div className="flex flex-col flex-grow">{children}</div>
      {/* <div className="flex flex-col">
        <div className="h-[1px] bg-[#D6D6D6]"></div>
        <div className="mt-8 flex items-end justify-end"></div>
      </div> */}
    </div>
  );
}
