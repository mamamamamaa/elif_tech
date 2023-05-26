import { OrderForm } from "../../components/OrderForm/OrderForm.tsx";
import { CartList } from "../../components/CartList/CartList.tsx";
import style from "./Cart.module.css";

export default function Cart() {
  return (
    <>
      <div className={style.pageWrapper}>
        <section className={style.orderFormWrapper}>
          <OrderForm />
        </section>
        <section className={style.orderListWrapper}>
          <CartList />
        </section>
      </div>
    </>
  );
}
