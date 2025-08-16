import { Link } from "react-router-dom";

import logo from "@/assets/images/Logo-main.png";
import { Button } from "@/components/ui/button";
import NavItem from "../navItems/navItem";
import { navLinks } from "./data";

function HeaderContent() {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="p-[5px] border-2 border-[#FFFFFF0A] rounded-lg">
          <img src={logo} alt="logo" className="size-[22px]" />
        </div>
        <h3 className="text-secondary-foreground">The Roots</h3>
      </div>

      <nav className="hidden md:block">
        <ul className="flex text-base">
          {navLinks.map((link) => (
            <NavItem key={link.name} href={link.href}>
              {link.name}
            </NavItem>
          ))}
        </ul>
      </nav>

      <Link to="/getStarted1">
        <Button className="text-primary-foreground">Get Started</Button>
      </Link>
    </>
  );
}

export default HeaderContent;
