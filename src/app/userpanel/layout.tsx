import React, { ReactNode } from "react";

import PanelWrapper from "@components/UserPanel/PanelWrapper/PanelWrapper";

interface Props {
  children: ReactNode;
}

export default function UserPanelLayout({ children }: Props) {
  return <PanelWrapper>{children}</PanelWrapper>;
}
