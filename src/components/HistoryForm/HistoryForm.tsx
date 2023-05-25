import { FC } from "react";
import { useForm } from "react-hook-form";
import { IOrderData } from "../../types/store.intarface.ts";
import { yupResolver } from "@hookform/resolvers/yup";

export const HistoryForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderData>({
    resolver: yupResolver(validationSchema),
  });

  return <></>;
};
