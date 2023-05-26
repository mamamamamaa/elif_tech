import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { getStoreProducts } from "../../redux/operations/products.ts";
import {
  selectActiveProducts,
  selectCurrentStore,
  selectStores,
} from "../../redux/selectors.ts";
import { ProductsList } from "../../components/ProductsList/ProductsList.tsx";
import style from "./Products.module.css";
import { setCurrentStore } from "../../redux/features/productsSlice.ts";

export default function Products() {
  const location = useLocation();
  const storeId = location.pathname.split("/").pop();

  const dispatch = useAppDispatch();
  const stores = useAppSelector(selectStores);
  const activeProducts = useAppSelector(selectActiveProducts);
  const currentStore = useAppSelector(selectCurrentStore);

  useEffect(() => {
    const isStore = Boolean(stores[0] && !stores[0].products);

    if (((storeId && isStore) || currentStore !== storeId) && storeId) {
      dispatch(getStoreProducts(storeId));
      dispatch(setCurrentStore(storeId));
    }
  }, [storeId]);

  return (
    <>
      {activeProducts && storeId && (
        <ProductsList activeProducts={activeProducts} storeId={storeId} />
      )}
      {!activeProducts && (
        <p className={style.noProductsTexts}>This store has no products</p>
      )}
    </>
  );
}
