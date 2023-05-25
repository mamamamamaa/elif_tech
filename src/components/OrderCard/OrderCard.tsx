import { FC } from "react";
import { IOrderHistory } from "../../types/store.intarface.ts";

interface Props {
  order: IOrderHistory;
}

export const OrderCard: FC<Props> = ({ order }) => {
  return (
    <div className="border border-gray-300 rounded p-4 shadow">
      <h3 className="text-xl font-semibold mb-2">Order ID: {order._id}</h3>
      <p className="mb-2">
        Customer: {order.name} ({order.email})
      </p>
      <p className="mb-2">Phone: {order.phone}</p>
      <p className="mb-2">Store: {order.store.name}</p>
      <p className="mb-2">Store Address: {order.store.address}</p>
      <p className="mb-2">Delivery Address: {order.address}</p>
      <p className="mb-2">Total Price: ${order.totalPrice}</p>
      <h4 className="text-lg font-semibold mb-2">Products:</h4>
      {order.products.map((product) => (
        <div
          key={product._id}
          className="border flex flex-row border-gray-200 rounded p-2 mb-2"
        >
          <img
            src={product.product.image}
            alt={product.product.name}
            className="w-1/2 object-cover rounded"
          />
          <div className="w-1/2 flex flex-col gep-2 items-center justify-center">
            <p className="text-lg font-semibold">{product.product.name}</p>
            <p>Price: ${product.product.price}</p>
            <p>Quantity: {product.product.quantity}</p>
            <p>Taken Quantity: {product.takenQuantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
