import { FC, Fragment } from "react";
import { OrderCard } from "../OrderCard/OrderCard.tsx";
import { IOrderHistory } from "../../types/store.intarface.ts";

interface Props {
  orderHistory: IOrderHistory[];
}

export const OrderHistoryList: FC<Props> = ({ orderHistory }) => {
  return (
    <>
      <ul className="flex flex-col gap-5">
        {orderHistory.map((order, idx) => (
          <Fragment key={idx}>
            <OrderCard order={order} />
          </Fragment>
        ))}
      </ul>
    </>
  );
};
