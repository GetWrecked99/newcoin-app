import { ReactNode } from "react";

import Container from "@components/Container/Container";
import Providers from "./GlobalRedux/provider/provider";

import "@assets/styles/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html>
      <body>
        <Providers>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
