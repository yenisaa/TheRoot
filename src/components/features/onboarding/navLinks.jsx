import { NavLink } from "react-router-dom";
import navDash from "../../../assets/icons/nav-dash.svg";

function NavigationLinks() {
  const links = [
    "/customisation1",
    "/customisation2",
    "/welcome",
    "/reason-for-learning",
    "/commitment",
    "/experience-prep",
  ];

  return (
    <div className="flex gap-2">
      {links.map((path) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            isActive
              ? "bg-secondary rounded-full"
              : "bg-background/20 rounded-full"
          }
        >
          <img
            src={navDash}
            alt="navigation dash"
            className="w-[32px] h-[4px] object-contain"  // <-- sets consistent size
          />
        </NavLink>
      ))}
    </div>
  );
}

export default NavigationLinks;
