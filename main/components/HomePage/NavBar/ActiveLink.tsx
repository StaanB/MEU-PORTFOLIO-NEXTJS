import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps{
    children: React.ReactElement
}

export const ActiveLink = ({children, href, ...rest}) => {
    const pathName = usePathname()

    const isCurrentPath = pathName === href || pathName === rest.as || pathName?.startsWith(String(rest.as))

    return(
        <Link {...rest} href={href} style={{borderBottom: `${isCurrentPath ? 'solid 2px #ea580c': 'none'} `}}>
            {children}
        </Link>
    )
}
