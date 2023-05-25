import { FC } from "react";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectCart } from "../../redux/selectors.ts";
import { CartCard } from "../CartCard/CartCard.tsx";

export const CartList: FC = () => {
  const cart = useAppSelector(selectCart);

  return (
    <>
      {cart.length !== 0 && (
        <ul className="flex flex-col gap-5">
          {cart.map(({ image, price, quantity, name, _id }) => (
            <li key={_id}>
              <CartCard
                id={_id}
                name={name}
                quantity={quantity}
                price={price}
                image={image}
              />
            </li>
          ))}
        </ul>
      )}
      {cart.length === 0 && (
        <p className="text-center">
          You have not added any items to your cart yet
        </p>
      )}
    </>
  );
};
