import { FC, Fragment } from "react";
import { OrderCard } from "../OrderCard/OrderCard.tsx";
import { IOrderHistory } from "../../types/store.intarface.ts";
import style from "./OrderHistoryList.module.css";

interface Props {
  orderHistory: IOrderHistory[];
}

export const OrderHistoryList: FC<Props> = ({ orderHistory }) => {
  return (
    <>
      <ul className={style.orderList}>
        {orderHistory.map((order, idx) => (
          <Fragment key={idx}>
            <OrderCard order={order} />
          </Fragment>
        ))}
      </ul>
    </>
  );
};
