import PanelWrapper from "@components/UserPanel/PanelWrapper/PanelWrapper";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function UserPanelLayout({ children }: Props) {
  return <PanelWrapper>{children}</PanelWrapper>;
}
