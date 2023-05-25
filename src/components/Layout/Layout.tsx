import { FC, ReactNode } from "react";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
