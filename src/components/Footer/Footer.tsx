import style from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <p className={style.allRights}>
          &copy; {new Date().getFullYear()} ElifTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
