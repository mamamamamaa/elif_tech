import { FC } from "react";
import { IOrderHistory } from "../../types/store.intarface.ts";
import noImage from "../../../public/no_image.gif";
import style from "./OrderCard.module.css";

interface Props {
  order: IOrderHistory;
}

export const OrderCard: FC<Props> = ({ order }) => {
  return (
    <div className={style.cardWrapper}>
      <h3 className={style.orderId}>Order ID: {order._id}</h3>
      <p>
        Customer: {order.name} ({order.email})
      </p>
      <p>Phone: {order.phone}</p>
      <p>Store: {order.store.name}</p>
      <p>Store Address: {order.store.address}</p>
      <p>Delivery Address: {order.address}</p>
      <p>Total Price: ${order.totalPrice}</p>
      <h4 className={style.productsHeader}>Products:</h4>
      {order.products.map((product) => (
        <div key={product._id} className={style.productWrapper}>
          <img
            src={product.product.image || noImage}
            alt={product.product.name}
            className={style.productImage}
          />
          <div className={style.productInfoWrapper}>
            <p className={style.productName}>{product.product.name}</p>
            <p>Price: ${product.product.price}</p>
            <p>Quantity: {product.product.quantity}</p>
            <p>Taken Quantity: {product.takenQuantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
