"use client";

import { type Web } from "@lwo/types";
import { createContext, PropsWithChildren, useContext } from "react";

type ThemeProviderProps = PropsWithChildren<{
  theme: Web.Theme;
}>;

export const ThemeContext = createContext({ theme: "standard" });

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme } = props;

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
