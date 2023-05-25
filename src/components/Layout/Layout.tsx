import { FC, ReactNode } from "react";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import style from "./Layout.module.css";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};
