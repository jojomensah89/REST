import React, { useState, createContext, ReactNode } from "react";

type childrenType = {
  children: ReactNode;
};

export const ThemeContext = createContext({
  theme: `light`,
  setTheme: (theme: string) => {},
});

export function ThemeProvider({ children }: childrenType) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
