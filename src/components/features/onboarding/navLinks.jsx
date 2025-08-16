import { NavLink } from "react-router-dom";
import navDash from "../../../assets/icons/nav-dash.svg";

function NavigationLinks() {
  return (
    <div className="flex gap-2 round">
      <NavLink
        to="/customisation1"
        className={({ isActive }) =>
          isActive ? "bg-secondary rounded-full" : "background/20"
        }
      >
        <img src={navDash} alt="navigation dash" />
      </NavLink>
      <NavLink
        to="/customisation2"
        className={({ isActive }) =>
          isActive ? "bg-secondary rounded-full" : "background/20"
        }
      >
        <img src={navDash} alt="navigation dash" />
      </NavLink>
      <NavLink
        to="/welcome"
        className={({ isActive }) =>
          isActive ? "bg-secondary rounded-full" : "background/20"
        }
      >
        <img src={navDash} alt="navigation dash" />
      </NavLink>
      <NavLink
        to="/reason-for-learning"
        className={({ isActive }) =>
          isActive ? "bg-secondary rounded-full" : "background/20"
        }
      >
        <img src={navDash} alt="navigation dash" />
      </NavLink>
      <NavLink
        to="/commitment"
        className={({ isActive }) =>
          isActive ? "bg-secondary rounded-full" : "background/20"
        }
      >
        <img src={navDash} alt="navigation dash" />
      </NavLink>
      <NavLink
        to="/experience-prep"
        className={({ isActive }) =>
          isActive ? "bg-secondary rounded-full" : "background/20"
        }
      >
        <img src={navDash} alt="navigation dash" />
      </NavLink>
    </div>
  );
}

export default NavigationLinks;
