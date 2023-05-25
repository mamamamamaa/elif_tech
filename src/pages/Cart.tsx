import { OrderForm } from "../components/OrderForm/OrderForm.tsx";

export default function Cart() {
  // const cart = useAppSelector(selectCart);

  return (
    <>
      <div className="flex flex-col justify-center md:flex-row gap-10 w-full h-full">
        <section className="md:w-2/4 md:h-auto border-2 rounded-xl py-7 px-5">
          <OrderForm />
        </section>
        <section className="md:w-2/4 border-2 rounded-xl py-7 px-5 overflow-y-scroll"></section>
      </div>
    </>
  );
}
