import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PanelContent({ children }: Props) {
  return <>{children}</>;
}
