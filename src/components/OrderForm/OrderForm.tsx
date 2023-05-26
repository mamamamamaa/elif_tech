import { FC, Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IOrderData } from "../../types/store.intarface.ts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { selectOrderData, selectTotalPrice } from "../../redux/selectors.ts";
import { IOrderFormInputs } from "../../types/form.interface.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  checkTotalPrice,
  setUserOrderData,
} from "../../redux/features/productsSlice.ts";
import { makeOrder } from "../../redux/operations/products.ts";
import * as yup from "yup";
import style from "./OrderForm.module.css";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, "Invalid phone number")
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
});

export const OrderForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderData>({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useAppDispatch();

  const totalPrice = useAppSelector(selectTotalPrice);
  const { email, phone, address, name } = useAppSelector(selectOrderData);

  const formInputs: IOrderFormInputs[] = [
    {
      label: "Name",
      name: "name",
      defaultValue: name,
      placeholder: "Max",
    },
    {
      label: "Email",
      name: "email",
      defaultValue: email,
      placeholder: "maxemail@gmail.com",
    },
    {
      label: "Phone",
      name: "phone",
      defaultValue: phone,
      placeholder: "+380000000000",
    },
    {
      label: "Address",
      name: "address",
      defaultValue: address,
      placeholder: "Academic Building 17",
    },
  ];

  const onSubmit: SubmitHandler<IOrderData> = (data) => {
    dispatch(setUserOrderData(data));
    dispatch(checkTotalPrice());
    dispatch(makeOrder(""));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formInputs.map(({ name, defaultValue, label, placeholder }) => (
          <Fragment key={name}>
            <label className={style.inputLabel}>
              {label}
              <p className={style.errorMessage}>{errors[name]?.message}</p>
              <input
                required
                placeholder={placeholder}
                defaultValue={defaultValue}
                className={style.input}
                {...register(name)}
              />
            </label>
          </Fragment>
        ))}

        <div className={style.submitWrapper}>
          <button className={style.submitBtn}>Submit</button>
          <span> TOTAL PRICE: {totalPrice}</span>
        </div>
      </form>
    </>
  );
};
