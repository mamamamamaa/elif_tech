import { FC, Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IOrderData } from "../../types/store.intarface.ts";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectOrderData } from "../../redux/selectors.ts";
import { IFormInputs } from "../../types/form.interface.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  const { email, phone, address, name } = useAppSelector(selectOrderData);

  const formInputs: IFormInputs[] = [
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

  const onSubmit: SubmitHandler<IOrderData> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formInputs.map(({ name, defaultValue, label, placeholder }) => (
          <Fragment key={name}>
            <label className="relative flex flex-col mb-4">
              {label}
              <p className="absolute top-0 right-0 text-red-600">
                {errors[name]?.message}
              </p>
              <input
                required
                placeholder={placeholder}
                defaultValue={defaultValue}
                className="border border-gray-300 px-3 py-2 rounded-md"
                {...register(name)}
              />
            </label>
          </Fragment>
        ))}

        <div className="flex flex-row items-center gap-9">
          <button className="w-1/2 rounded py-1 px-2 bg-blue-600 text-white text-sm border border-blue-600 hover:text-blue-600 hover:bg-transparent disabled:bg-transparent disabled:text-blue-600">
            Submit
          </button>
          <span> TOTAL PRICE: 0</span>
        </div>
      </form>
    </>
  );
};