import { FC, Suspense, useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectError, selectIsLoading } from "../../redux/selectors.ts";
import { SpinnerLoader } from "../Spinner/Spinner.tsx";
import { toast, Toaster } from "react-hot-toast";

export const Layout: FC = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className={style.layout}>
      <Header />
      <main className={style.main}>
        <Toaster position="top-center" reverseOrder={false} />
        {isLoading && <SpinnerLoader />}
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
