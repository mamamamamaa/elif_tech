import { FaCircleNotch } from "react-icons/fa";
import style from "./Spinner.module.css";

export const SpinnerLoader = () => {
  return (
    <div className={style.spinnerWrapper}>
      <div className={style.backdrop}></div>
      <div className={style.iconWrapper}>
        <FaCircleNotch className={style.icon} />
      </div>
    </div>
  );
};
