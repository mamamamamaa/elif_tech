import { FC, Fragment } from "react";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectOrderHistory } from "../../redux/selectors.ts";
import { OrderCard } from "../OrderCard/OrderCard.tsx";

export const OrderHistoryList: FC = () => {
  const orderHistory = useAppSelector(selectOrderHistory);

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
