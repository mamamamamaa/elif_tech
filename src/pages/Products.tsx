import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { getStoreProducts } from "../redux/operations/products.ts";
import { selectActiveProducts } from "../redux/selectors.ts";

export default function Products() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const storeId = pathSegments.pop();

  const dispatch = useAppDispatch();
  const activeProducts = useAppSelector(selectActiveProducts);

  useEffect(() => {
    if (storeId) {
      dispatch(getStoreProducts(storeId));
    }
  }, [storeId]);

  return (
    <>
      {activeProducts && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeProducts.map(({ _id, name, image }) => (
            <li key={_id}>
              <article className="flex flex-col justify-between bg-white rounded-lg shadow p-4 h-full">
                <img src={image} alt="Product" className="w-full" />
                <div>
                  <h3 className="text-lg font-bold mt-2">{name}</h3>
                  <button
                    type="button"
                    className="h-7 w-full rounded py-1 px-2 bg-blue-600 text-white text-sm border border-blue-600 hover:text-blue-600 hover:bg-transparent"
                  >
                    Order
                  </button>
                </div>
              </article>
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
