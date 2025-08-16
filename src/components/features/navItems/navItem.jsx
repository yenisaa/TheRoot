import { NavLink } from "react-router-dom";

function NavItem({ href, children }) {
  return (
    <li className="py-2.5 px-4 leading-6 cursor-pointer tracking-normal hover:text-secondary-foreground">
      <NavLink to={href}>{children}</NavLink>
    </li>
  );
}

export default NavItem;
