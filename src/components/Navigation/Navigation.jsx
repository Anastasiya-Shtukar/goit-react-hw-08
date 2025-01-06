import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import UserNav from "../IsLoggedNav/UserNav";
import AuthNav from "../IsLoggedNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";

const buildLink = ({ isActive }) => {
  return clsx(css.home, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <div className={css.div}>
        <NavLink to="/" className={buildLink}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={buildLink}>
            Contacts
          </NavLink>
        )}
      </div>
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </nav>
  );
}
