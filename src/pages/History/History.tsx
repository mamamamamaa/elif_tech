import { HistoryForm } from "../../components/HistoryForm/HistoryForm.tsx";
import { OrderHistoryList } from "../../components/OrderHistoryList/OrderHistoryList.tsx";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectOrderHistory } from "../../redux/selectors.ts";

export default function History() {
  const orderHistory = useAppSelector(selectOrderHistory);
  return (
    <>
      <div className="flex flex-col justify-center gap-10 w-full">
        <section className="border-2 rounded-xl py-7 px-5">
          <HistoryForm />
        </section>
        {orderHistory.length > 0 && (
          <section className="border-2 rounded-xl py-7 px-5 overflow-y-scroll">
            <OrderHistoryList orderHistory={orderHistory} />
          </section>
        )}
      </div>
    </>
  );
}
