import { createContext, useState } from "react";

interface ThemeProps {
  theme: {
    hexadecimal: string;
    shadow: string;
  };
  setYellow?: () => void;
  setOrange?: () => void;
  setGreen?: () => void;
  setBlue?: () => void;
  setRed?: () => void;

  lang: string;
  setLangBR?: () => void;
  setLangEN?: () => void;
}

export const ThemeContext = createContext<ThemeProps>({});

export const ThemeProvider = ({ children }) => {
  // Cor padrão do tema
  const [theme, setTheme] = useState({
    hexadecimal: "#EA580C",
    shadow: "0px 0px 40px 5px #EA580C",
  });

  // Idioma padrão do site
  const [lang, setLang] = useState("pt-BR");

  const setYellow = () => {
    setTheme({ hexadecimal: "#EB9B17", shadow: "0px 0px 40px 5px #EB9B17" });
  };

  const setGreen = () => {
    setTheme({ hexadecimal: "#189E4D", shadow: "0px 0px 40px 5px #189E4D" });
  };

  const setOrange = () => {
    setTheme({ hexadecimal: "#EA580C", shadow: "0px 0px 40px 5px #EA580C" });
  };

  const setBlue = () => {
    setTheme({ hexadecimal: "#2389EB", shadow: "0px 0px 40px 5px #2389EB" });
  };

  const setRed = () => {
    setTheme({ hexadecimal: "#EB0E00", shadow: "0px 0px 40px 5px #EB0E00" });
  };

  const setLangBR = () => {
    setLang("pt-BR");
  };

  const setLangEN = () => {
    setLang("en-US");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setYellow,
        setOrange,
        setGreen,
        setBlue,
        setRed,
        lang,
        setLangBR,
        setLangEN,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
