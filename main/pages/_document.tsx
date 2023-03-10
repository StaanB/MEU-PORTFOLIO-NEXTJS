import { Html, Head, Main, NextScript } from "next/document";
import { useContext } from "react";
import { ThemeContext } from "../components/HomePage/ThemeProvider/ThemeContext";


export default function Document() {
  // Tema
  const { lang } = useContext(ThemeContext);
 
  return (
    <Html id="html" lang={lang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
