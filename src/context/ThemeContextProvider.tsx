import React, { useState, createContext, ReactNode, useEffect } from "react";

type childrenType = {
  children: ReactNode;
};

export const ThemeContext = createContext({
  theme: `light`,
  setTheme: (theme: string) => {},
});

export function ThemeProvider({ children }: childrenType) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Use useEffect to read the theme from local storage
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme("light");
    }
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Use useEffect to write the theme to local storage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
