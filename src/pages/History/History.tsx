import { HistoryForm } from "../../components/HistoryForm/HistoryForm.tsx";
import { OrderHistoryList } from "../../components/OrderHistoryList/OrderHistoryList.tsx";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectOrderHistory } from "../../redux/selectors.ts";
import store from "./History.module.css";

export default function History() {
  const orderHistory = useAppSelector(selectOrderHistory);
  return (
    <>
      <div className={store.pageWrapper}>
        <section className={store.historyFormWrapper}>
          <HistoryForm />
        </section>
        {orderHistory.length > 0 && (
          <section className={store.historyListWrapper}>
            <OrderHistoryList orderHistory={orderHistory} />
          </section>
        )}
      </div>
    </>
  );
}
