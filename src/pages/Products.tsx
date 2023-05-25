// import { useLocation } from "react-router-dom";
// import { useEffect, useMemo, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
// import { getStoreProducts } from "../redux/operations/products.ts";
// import { selectActiveProducts, selectStores } from "../redux/selectors.ts";
// import { ProductCard } from "../components/ProductCard/ProductCard.tsx";
// import { setInCart } from "../redux/features/productsSlice.ts";
//
// export default function Products() {
//   const [isStoreUploaded, setStoreUpload] = useState<boolean>(false);
//
//   const isConditionMet = useMemo(() => isStoreUploaded, [isStoreUploaded]);
//
//   const location = useLocation();
//   const pathSegments = location.pathname.split("/");
//   const storeId = pathSegments.pop();
//
//   const dispatch = useAppDispatch();
//   const stores = useAppSelector(selectStores);
//   const activeProducts = useAppSelector(selectActiveProducts);
//
//   const handleAddToCard = (id: string) =>
//     storeId && dispatch(setInCart({ product: id, store: storeId }));
//
//   useEffect(() => {
//     if (storeId && stores.length > 0 && !isConditionMet) {
//       dispatch(getStoreProducts(storeId));
//       setStoreUpload(true);
//     }
//   }, [storeId, stores]);
//
//   return (
//     <>
//       {activeProducts && (
//         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {activeProducts.map(({ _id, name, image }) => (
//             <li key={_id}>
//               <ProductCard
//                 name={name}
//                 image={image}
//                 id={_id}
//                 handleAddToCard={handleAddToCard}
//               />
//             </li>
//           ))}
//         </ul>
//       )}
//       {!activeProducts && (
//         <p className="text-center">This store has no products</p>
//       )}
//     </>
//   );
// }

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { getStoreProducts } from "../redux/operations/products.ts";
import { selectActiveProducts, selectStores } from "../redux/selectors.ts";
import { ProductCard } from "../components/ProductCard/ProductCard.tsx";
import { setInCart } from "../redux/features/productsSlice.ts";

export default function Products() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const storeId = pathSegments.pop();

  const dispatch = useAppDispatch();
  const stores = useAppSelector(selectStores);
  const activeProducts = useAppSelector(selectActiveProducts);

  const handleAddToCard = (id: string) =>
    storeId && dispatch(setInCart({ product: id, store: storeId }));

  useEffect(() => {
    const isStore = Boolean(stores[0] && !stores[0].products);

    if (storeId && isStore) {
      dispatch(getStoreProducts(storeId));
    }
  }, [storeId, stores]);

  return (
    <>
      {activeProducts && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeProducts.map(({ _id, name, image }) => (
            <li key={_id}>
              <ProductCard
                name={name}
                image={image}
                id={_id}
                handleAddToCard={handleAddToCard}
              />
            </li>
          ))}
        </ul>
      )}
      {!activeProducts && (
        <p className="text-center">This store has no products</p>
      )}
    </>
  );
}
