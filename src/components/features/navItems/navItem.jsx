import { HashLink } from "react-router-hash-link";

function NavItem({ href, children }) {
  const isHashLink = href.startsWith("#");

  return (
    <li className="py-2.5 px-4 leading-6 cursor-pointer tracking-normal hover:text-secondary-foreground">
      <HashLink smooth={isHashLink} to={href}>
        {children}
      </HashLink>
    </li>
  );
}

export default NavItem;

// in case we have a nav that is routing to another page
// const LinkComponent = isHashLink ? HashLink : Link;
{
  /* <LinkComponent smooth={isHashLink} to={href}>
        {children}
      </LinkComponent> */
}
