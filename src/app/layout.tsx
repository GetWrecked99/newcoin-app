import { ReactNode } from "react";

import Container from "@components/Container/Container";

import "@assets/styles/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html>
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
