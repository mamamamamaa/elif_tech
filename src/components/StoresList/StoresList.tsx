import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IStore } from "../../types/store.intarface.ts";
import style from "./StoresList.module.css";

interface Props {
  stores: IStore[];
}

export const StoresList: FC<Props> = ({ stores }) => {
  return (
    <>
      {stores.length > 0 && (
        <div className={style.storeLinksContainer}>
          {stores.map(({ name, _id }) => {
            return (
              <NavLink
                to={_id}
                className={({ isActive }) =>
                  isActive ? style.activeLink : style.link
                }
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
