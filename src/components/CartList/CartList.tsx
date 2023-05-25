import { FC } from "react";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectCart } from "../../redux/selectors.ts";
import { QuantityCounter } from "../QuantityCounter/QuantityCounter.tsx";
import noImage from "../../../public/no_image.gif";

export const CartList: FC = () => {
  const cart = useAppSelector(selectCart);

  return (
    <>
      {cart.length !== 0 && (
        <ul>
          {cart.map(({ image, price, quantity, name }) => (
            <li key={name}>
              <article className=" flex flex-row bg-white rounded-lg shadow p-4">
                <img className="w-1/2" src={image || noImage} alt={name} />
                <div className="flex items-center justify-center gap-2 flex-col w-full">
                  <h2 className="font-bold">{name}</h2>
                  <p>Price: {price}</p>
                  <QuantityCounter quantity={quantity} />
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
