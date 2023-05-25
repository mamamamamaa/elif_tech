import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { getStores } from "@/redux/operations/products";
import { selectStore } from "@/redux/selectors";
import Link from "next/link";
import { Products } from "@/pages/store/[:id]";

export default function Shop() {
  const dispatch = useAppDispatch();
  const store = useAppSelector(selectStore);

  useEffect(() => {
    if (store.length === 0) {
      dispatch(getStores());
    }
  }, [dispatch]);

  return (
    <>
      <div className="flex gap-10">
        <div className="w-1/4 rounded-xl border shadow p-10">
          <ul className="h-full">
            <li>
              <Link
                href={{
                  pathname: "/store/[:id]",
                  query: { id: "dasdsadsadsa" },
                }}
              >
                Магазин 1
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/store/[:id]",
                  query: { id: "dasdsassadsadsa" },
                }}
              >
                Магазин 2
              </Link>
            </li>
          </ul>
        </div>
        <Products />
      </div>
    </>
  );
}
