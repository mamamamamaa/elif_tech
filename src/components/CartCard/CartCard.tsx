import { FC } from "react";
import noImage from "../../../public/no_image.gif";
import { QuantityCounter } from "../QuantityCounter/QuantityCounter.tsx";
import { RxCross2 } from "react-icons/rx";
import { useAppDispatch } from "../../redux/hooks.ts";
import { removeFromCart } from "../../redux/features/productsSlice.ts";
import style from "./CartCard.module.css";

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
    <section className={style.cardWrapper}>
      <img className={style.img} src={image || noImage} alt={name} />
      <div className={style.productInfoWrapper}>
        <h2 className={style.productName}>{name}</h2>
        <p>Price: {price}</p>
        <QuantityCounter quantity={quantity} productId={id} />
      </div>
      <button
        type="button"
        onClick={handleRemoveFormCart}
        className={style.removeBtn}
      >
        <RxCross2 />
      </button>
    </section>
  );
};
