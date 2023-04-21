"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@core/redux/store/store";
import { CustomToastContainer } from "@components/common/ToastContainer/ToastContainer";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
        <CustomToastContainer />
      </PersistGate>
    </Provider>
  );
}
