import { createContext, useState } from "react";


const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

     function themeHandler() {
     if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themeHandler
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
