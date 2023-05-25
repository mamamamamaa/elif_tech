import { FC, Suspense } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectIsLoading } from "../../redux/selectors.ts";
import { SpinnerLoader } from "../Spinner/Spinner.tsx";

export const Layout: FC = () => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <div className={style.layout}>
      <Header />
      <main className={style.main}>
        {isLoading && <SpinnerLoader />}
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
