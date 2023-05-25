import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getStores } from "../redux/operations/products";
import { selectStore } from "../redux/selectors";
import { Link } from "react-router-dom";

export default function Shop() {
  const dispatch = useAppDispatch();
  const store = useAppSelector(selectStore);

  useEffect(() => {
    if (store.length === 0) {
      dispatch(getStores(""));
    }
  }, [dispatch]);

  return (
    <>
      <div className="flex gap-10">
        <div className="w-1/4 rounded-xl border shadow p-10">
          <ul className="h-full">
            <li>
              <Link to={"dadsad"}>Магазин 1</Link>
            </li>
            <li>
              <Link to={"dadsad"}>Магазин 2</Link>
            </li>
          </ul>
        </div>
        <div className="w-3/4 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <img src="product-image.jpg" alt="Product" className="w-full" />
            <h3 className="text-lg font-bold mt-2">Название товара</h3>
            <p className="text-gray-500">$10</p>
            <div className="flex items-center mt-4">
              <label htmlFor="quantity" className="mr-2">
                Количество:
              </label>
              <input
                type="number"
                id="quantity"
                className="border border-gray-300 px-2 py-1 rounded"
                min="1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
