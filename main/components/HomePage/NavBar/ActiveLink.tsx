// Import Link do Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import tema
import { ReactNode, useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

export const ActiveLink = ({
  children,
  href,
  ...rest
}: {
  children: ReactNode;
  href: string;
  [rest: string]: ReactNode;
}) => {
  // Tema
  const { theme } = useContext(ThemeContext);

  //   Verificação da página atual
  const pathName = usePathname();
  const isCurrentPath =
    pathName === href ||
    pathName === rest.as ||
    pathName?.startsWith(String(rest.as));

  // Função para border bottom
  function setBorderBottom() {
    if (isCurrentPath) {
      return "solid 2px " + theme?.hexadecimal;
    } else {
      return "none";
    }
  }

  return (
    <Link {...rest} href={href} style={{ borderBottom: setBorderBottom() }}>
      {children}
    </Link>
  );
};
