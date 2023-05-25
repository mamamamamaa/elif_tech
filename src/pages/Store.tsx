import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getStores } from "../redux/operations/products";
import { selectStores } from "../redux/selectors";
import { Link } from "react-router-dom";

export default function Shop() {
  const dispatch = useAppDispatch();
  const stores = useAppSelector(selectStores);

  useEffect(() => {
    if (stores.length === 0) {
      dispatch(getStores(""));
    }
  }, [dispatch]);

  console.log(stores);

  return (
    <>
      <div className="flex w-full">
        <section className="w-1/4 border-2 rounded-xl py-7 px-5">
          {stores.length > 0 && (
            <ul>
              {stores.map(({ name, _id }) => (
                <li
                  className="border rounded-xl py-2 px-3 hover:bg-blue-500 hover:text-white "
                  key={_id}
                >
                  <Link to={_id}>{name}</Link>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section></section>
      </div>
    </>
  );
}
