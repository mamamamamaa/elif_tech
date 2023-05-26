import { FC, Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IOrderData, IOrderHistoryData } from "../../types/store.intarface.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IOrderHistoryFormInputs } from "../../types/form.interface.ts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { selectOrderData } from "../../redux/selectors.ts";
import { getOrderHistory } from "../../redux/operations/products.ts";
import style from "./HistoryForm.module.css";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, "Invalid phone number")
    .required("Phone number is required"),
});

export const HistoryForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderData>({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useAppDispatch();
  const { email, phone } = useAppSelector(selectOrderData);

  const formInputs: IOrderHistoryFormInputs[] = [
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
  ];

  const onSubmit: SubmitHandler<IOrderHistoryData> = (data) =>
    dispatch(getOrderHistory(data));

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

        <button className={style.submitBtn}>Submit</button>
      </form>
    </>
  );
};
