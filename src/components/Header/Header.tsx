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
          <Link href="/shop" className={style.navigationLink}>
            Shot
          </Link>
          <Link href="/shop-cart" className={style.navigationLink}>
            Shop Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};
