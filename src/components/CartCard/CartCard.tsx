import { FC } from "react";
import noImage from "../../../public/no_image.gif";
import { QuantityCounter } from "../QuantityCounter/QuantityCounter.tsx";
import { RxCross2 } from "react-icons/rx";
import { useAppDispatch } from "../../redux/hooks.ts";
import { removeFromCart } from "../../redux/features/productsSlice.ts";

interface Props {
  id: string;
  image: string;
  quantity: number;
  price: number;
  name: string;
}

export const CartCard: FC<Props> = ({ price, image, quantity, name, id }) => {
  const dispatch = useAppDispatch();

  const handleRemoveFormCart = () => dispatch(removeFromCart(id));

  return (
    <article className=" flex flex-row bg-white rounded-lg shadow p-4 relative">
      <img className="w-1/2" src={image || noImage} alt={name} />
      <div className="flex items-center justify-center gap-2 flex-col w-full">
        <h2 className="font-bold">{name}</h2>
        <p>Price: {price}</p>
        <QuantityCounter quantity={quantity} />
      </div>
      <button
        type="button"
        onClick={handleRemoveFormCart}
        className="absolute top-3 right-3"
      >
        <RxCross2 />
      </button>
    </article>
  );
};
