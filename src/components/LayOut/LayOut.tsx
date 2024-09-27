"use client";

import { store } from "@/Redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

const LayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};

export default LayOut;
