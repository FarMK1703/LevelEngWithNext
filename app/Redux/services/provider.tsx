"use client";

import { store } from "../store";
import { Provider } from "react-redux";
import AuthProvider from "./AuthProvider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
       
            <AuthProvider>
              <Provider store={store}>
                {children}
              </Provider>
            </AuthProvider>
        
    );
}
