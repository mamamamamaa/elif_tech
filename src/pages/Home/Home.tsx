import style from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={style.pageContainer}>
      <h1 className={style.welcomeHeader}>Welcome to ElifTech Delivery!</h1>
      <p className={style.paragraph}>
        We are a leading food delivery company, providing delicious meals right
        to your doorstep.
      </p>
      <Link to="/store" className={style.orderLink}>
        Order Now
      </Link>
    </div>
  );
}
