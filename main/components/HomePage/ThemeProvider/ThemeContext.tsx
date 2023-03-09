import { createContext, useState } from "react";

interface ThemeProps {
  theme?: {
    hexadecimal: string;
    shadow: string;
  };
  setYellow?: () => void;
  setOrange?: () => void;
}

export const ThemeContext = createContext<ThemeProps>({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    hexadecimal: "#ea580c",
    shadow: "0px 0px 40px 5px #ea580c",
  });

  const setYellow = () => {
    setTheme({ hexadecimal: "#EB9B17", shadow: "0px 0px 40px 5px #EB9B17" });
  };

  const setOrange = () => {
    setTheme({ hexadecimal: "#ea580c", shadow: "0px 0px 40px 5px #ea580c" });
  };

  return (
    <ThemeContext.Provider value={{ theme, setYellow, setOrange }}>
      {children}
    </ThemeContext.Provider>
  );
};
