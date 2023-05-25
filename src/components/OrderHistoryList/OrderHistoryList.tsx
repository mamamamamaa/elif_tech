import { FC } from "react";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectOrderHistory } from "../../redux/selectors.ts";

export const OrderHistoryList: FC = () => {
  const orderHistory = useAppSelector(selectOrderHistory);

  return <></>;
};
