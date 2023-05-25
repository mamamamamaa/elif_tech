import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/elif_tech_logo.jpg";
import style from "./Header.module.css";

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
        <Link href="/" className={style.logoBox}>
          <Image className={style.logoImg} src={logo} alt="ElifTech Logo" />
          <span className={style.logoText}>ElifTech Delivery</span>
        </Link>
        <nav className={style.navigation}>
          {navLinks.map(({ linkTo, pageName }) => (
            <Link href={linkTo} key={pageName} className={style.navigationLink}>
              {pageName}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
