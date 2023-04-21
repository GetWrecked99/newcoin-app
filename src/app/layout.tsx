import { ReactNode } from "react";

import Providers from "@app/provider/provider";

import { Container } from "@components/Container/Container";

import "@assets/styles/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "NewCoin-App",
};

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
