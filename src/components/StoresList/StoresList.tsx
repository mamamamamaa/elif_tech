import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IStore } from "../../types/store.intarface.ts";

interface Props {
  stores: IStore[];
}

export const StoresList: FC<Props> = ({ stores }) => {
  return (
    <>
      {stores.length > 0 && (
        <div className="flex flex-col gap-3">
          {stores.map(({ name, _id }) => {
            return (
              <NavLink
                to={_id}
                className="border rounded-xl py-2 px-3 hover:bg-blue-500 hover:text-white overflow-hidden"
                key={_id}
              >
                {name}
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};
