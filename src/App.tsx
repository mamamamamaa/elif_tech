import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";

import ProductPage from "./pages/Products/Products.tsx";

const HomePage = lazy(() => import("./pages/Home/Home.tsx"));
const CartPage = lazy(() => import("./pages/Cart/Cart.tsx"));
const HistoryPage = lazy(() => import("./pages/History/History.tsx"));
const StorePage = lazy(() => import("./pages/Store/Store.tsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound.tsx"));

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/store" element={<StorePage />}>
          <Route path=":id" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
