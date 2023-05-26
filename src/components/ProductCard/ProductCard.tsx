import { FC } from "react";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectCart } from "../../redux/selectors.ts";
import noImage from "../../../public/no_image.gif";
import style from "./ProductCard.module.css";

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
    <section className={style.cardWrapper}>
      <img src={image || noImage} alt="Product" className={style.img} />
      <div>
        <h3 className={style.productName}>{name}</h3>
        <button
          type="button"
          className={style.orderButton + " bg-blue-600"}
          disabled={isAlreadyInCart}
          onClick={() => handleAddToCard(id)}
        >
          Order
        </button>
      </div>
    </section>
  );
};
