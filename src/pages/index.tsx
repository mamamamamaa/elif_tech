import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setHello } from "@/redux/features/productsSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.products);

  const handleSetHello = () => dispatch(setHello("hello"));

  return (
    <>
      <h1>Hello Elif Tech -- ({value})</h1>
      <button type="button" onClick={handleSetHello}>
        Set hello
      </button>
    </>
  );
}
