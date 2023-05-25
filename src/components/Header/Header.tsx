import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/elif_tech_logo.jpg";
import style from "./Header.module.css";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <Link href="/" className={style.logoBox}>
          <Image className={style.logoImg} src={logo} alt="ElifTech Logo" />
          <span className={style.logoText}>ElifTech Delivery</span>
        </Link>
        <nav className={style.navigation}>
          <Link href="/store" className={style.navigationLink}>
            Shop
          </Link>
          <Link href="/cart" className={style.navigationLink}>
            Shopping Cart
          </Link>
          <Link href="/history" className={style.navigationLink}>
            Shopping History
          </Link>
        </nav>
      </div>
    </header>
  );
};
