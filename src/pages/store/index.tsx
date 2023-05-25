import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { getStores } from "@/redux/operations/products";

export default function Shop() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStores());
  }, [dispatch]);

  return <>Welcome to the Shop page!</>;
}
