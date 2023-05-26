import { FC } from "react";
import { ProductCard } from "../ProductCard/ProductCard.tsx";
import { useAppDispatch } from "../../redux/hooks.ts";
import { setInCart } from "../../redux/features/productsSlice.ts";
import { IProduct } from "../../types/store.intarface.ts";
import style from "./ProductsList.module.css";

interface Props {
  storeId: string;
  activeProducts: IProduct[];
}

export const ProductsList: FC<Props> = ({ storeId, activeProducts }) => {
  const dispatch = useAppDispatch();
  const handleAddToCard = (id: string) =>
    storeId && dispatch(setInCart({ product: id, store: storeId }));

  return (
    <>
      {activeProducts && (
        <ul className={style.productsList}>
          {activeProducts.map(({ _id, name, image }) => (
            <li key={_id}>
              <ProductCard
                name={name}
                image={image}
                id={_id}
                handleAddToCard={handleAddToCard}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
