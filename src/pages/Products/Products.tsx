import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { getStoreProducts } from "../../redux/operations/products.ts";
import { selectActiveProducts, selectStores } from "../../redux/selectors.ts";
import { ProductsList } from "../../components/ProductsList/ProductsList.tsx";

export default function Products() {
  const [memStoreIs, setMemStoreId] = useState<string>();
  const memorisedStoreId = useMemo(() => memStoreIs, [memStoreIs]);

  const location = useLocation();
  const storeId = location.pathname.split("/").pop();

  const dispatch = useAppDispatch();
  const stores = useAppSelector(selectStores);
  const activeProducts = useAppSelector(selectActiveProducts);

  useEffect(() => {
    const isStore = Boolean(stores[0] && !stores[0].products);
    const isNewStoreId =
      memorisedStoreId && storeId && storeId !== memorisedStoreId;

    if ((storeId && isStore) || isNewStoreId) {
      dispatch(getStoreProducts(storeId));
      setMemStoreId(storeId);
    }
  }, [storeId, stores]);

  return (
    <>
      {activeProducts && storeId && (
        <ProductsList activeProducts={activeProducts} storeId={storeId} />
      )}
      {!activeProducts && (
        <p className="text-center">This store has no products</p>
      )}
    </>
  );
}
