import { FC } from "react";
import { ProductCard } from "../ProductCard/ProductCard.tsx";
import { useAppDispatch } from "../../redux/hooks.ts";
import { setInCart } from "../../redux/features/productsSlice.ts";
import { IProduct } from "../../types/store.intarface.ts";

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
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
