import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PrimaryButton({ children }: Props): JSX.Element {
  return (
    <button className="px-6 py-3 bg-primary text-base font-bold text-white rounded-2xl">
      {children}
    </button>
  );
}
