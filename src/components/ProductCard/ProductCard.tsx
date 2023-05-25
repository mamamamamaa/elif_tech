import { FC } from "react";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectCart } from "../../redux/selectors.ts";
import noImage from "../../../public/no_image.gif";

interface Props {
  name: string;
  image: string;
  id: string;
  handleAddToCard: (id: string) => void;
}

export const ProductCard: FC<Props> = ({
  id,
  name,
  image,
  handleAddToCard,
}) => {
  const cart = useAppSelector(selectCart);

  const isAlreadyInCart = Boolean(cart.find(({ _id }) => id === _id));

  return (
    <article className="flex flex-col justify-between bg-white rounded-lg shadow p-4 h-full">
      <img src={image || noImage} alt="Product" className="w-full" />
      <div>
        <h3 className="text-lg font-bold mt-2">{name}</h3>
        <button
          type="button"
          className="h-7 w-full rounded py-1 px-2 bg-blue-600 text-white text-sm border border-blue-600 hover:text-blue-600 hover:bg-transparent disabled:bg-transparent disabled:text-blue-600"
          disabled={isAlreadyInCart}
          onClick={() => handleAddToCard(id)}
        >
          Order
        </button>
      </div>
      <button type="button"></button>
    </article>
  );
};
