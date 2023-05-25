import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getStores } from "../redux/operations/products";
import { selectStores } from "../redux/selectors";
import { NavLink, Outlet } from "react-router-dom";

export default function Shop() {
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
          {stores.length > 0 && (
            <div className="flex flex-col gap-3">
              {stores.map(({ name, _id }) => (
                <NavLink
                  to={_id}
                  className="border rounded-xl py-2 px-3 hover:bg-blue-500 hover:text-white overflow-hidden"
                  key={_id}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          )}
        </section>
        <section className="md:w-3/4 border-2 rounded-xl py-7 px-5 overflow-y-scroll">
          <Outlet />
        </section>
      </div>
    </>
  );
}
