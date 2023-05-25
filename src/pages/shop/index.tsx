"use client";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { getShops } from "@/redux/operations/products";

export default function Shop() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

  return <>Welcome to the Shop page!</>;
}
