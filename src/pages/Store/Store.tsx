import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { useEffect } from "react";
import { getStores } from "../../redux/operations/products.ts";
import { selectStores } from "../../redux/selectors.ts";
import { Outlet, useLocation } from "react-router-dom";
import { StoresList } from "../../components/StoresList/StoresList.tsx";

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
      <div className="flex flex-col justify-center md:flex-row gap-10 w-full md:max-h-[82vh] md:min-h-[82vh] h-full">
        <section className="md:w-1/4 h-40 md:h-auto overflow-y-scroll  border-2 rounded-xl py-7 px-5">
          {stores.length > 0 && <StoresList stores={stores} />}
        </section>
        <section className="md:w-3/4 border-2 rounded-xl py-7 px-5 overflow-y-scroll">
          <Outlet />
          {location.pathname === "/store" && (
            <p className="text-center">Choose a store!</p>
          )}
        </section>
      </div>
    </>
  );
}
