import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { useEffect } from "react";
import { getStores } from "../../redux/operations/products.ts";
import { selectStores } from "../../redux/selectors.ts";
import { Outlet, useLocation } from "react-router-dom";
import { StoresList } from "../../components/StoresList/StoresList.tsx";

import store from "./Store.module.css";

export default function Shop() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const stores = useAppSelector(selectStores);

  useEffect(() => {
    if (stores.length === 0) {
      dispatch(getStores(""));
    }
  }, [dispatch]);

  return (
    <>
      <div className={store.pageWrapper}>
        <section className={store.storesListWrapper}>
          {stores.length > 0 && <StoresList stores={stores} />}
        </section>
        <section className={store.productsListWrapper}>
          <Outlet />
          {location.pathname === "/store" && (
            <p className={store.noProductsTexts}>Choose a store!</p>
          )}
        </section>
      </div>
    </>
  );
}
