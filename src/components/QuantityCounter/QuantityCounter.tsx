import { FC, useState } from "react";

interface Props {
  quantity: number;
}

export const QuantityCounter: FC<Props> = ({ quantity }) => {
  const [count, setCount] = useState<number>(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1 && count < quantity) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-l"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="bg-gray-100 px-3 py-2">{count}</span>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-r"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};
