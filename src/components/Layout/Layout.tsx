import { FC, Suspense } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
