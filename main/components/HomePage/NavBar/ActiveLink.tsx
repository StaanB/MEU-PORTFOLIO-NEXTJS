// Import Link do Next
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

// Import tema
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

interface NavLinkProps extends LinkProps {
  children: React.ReactElement;
}

export const ActiveLink = ({ children, href, ...rest }) => {
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
