import { HistoryForm } from "../components/HistoryForm/HistoryForm.tsx";
import { OrderHistoryList } from "../components/OrderHistoryList/OrderHistoryList.tsx";

export default function History() {
  return (
    <>
      <div className="flex flex-col justify-center gap-10 w-full">
        <section className="border-2 rounded-xl py-7 px-5">
          <HistoryForm />
        </section>
        <section className="border-2 rounded-xl py-7 px-5 overflow-y-scroll">
          <OrderHistoryList />
        </section>
      </div>
    </>
  );
}
