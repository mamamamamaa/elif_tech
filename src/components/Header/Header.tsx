import logo from "../../../public/elif_tech_logo.jpg";
import style from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    pageName: "Shops",
    linkTo: "/store",
  },
  {
    pageName: "Cart",
    linkTo: "/cart",
  },
  {
    pageName: "History",
    linkTo: "/history",
  },
];

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <Link to="/" className={style.logoBox}>
          <img className={style.logoImg} src={logo} alt="ElifTech Logo" />
          <span className={style.logoText}>ElifTech Delivery</span>
        </Link>
        <nav className={style.navigation}>
          {navLinks.map(({ linkTo, pageName }) => (
            <NavLink
              to={linkTo}
              key={pageName}
              className={({ isActive }) =>
                isActive ? style.activeNavigationLink : style.navigationLink
              }
            >
              {pageName}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
