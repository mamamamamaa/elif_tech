import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks.ts";
import { updateQuantity } from "../../redux/features/productsSlice.ts";
import style from "./QuantityCounter.module.css";

interface Props {
  quantity: number;
  productId: string;
}

export const QuantityCounter: FC<Props> = ({ quantity, productId }) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1 && count < quantity) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    dispatch(updateQuantity({ id: productId, totalQuantity: count }));
  }, [count]);

  return (
    <div className={style.counterWrapper}>
      <button className={style.decrementBrn} onClick={handleDecrement}>
        -
      </button>
      <span className={style.count}>{count}</span>
      <button className={style.incrementBtn} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};
