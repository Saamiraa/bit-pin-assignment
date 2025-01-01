import ErrorMessage from "../../../../shared-components/ErrorMessage";
import Loading from "../../../../shared-components/Loading";
import EmptyOrderMessage from "../EmptyOrderMessage";
import OrderPercentageCalculator from "../OrderPercentageCalculator";
import OrderSummaryDetails from "../OrderSummaryDetails";
import OrderTableHeader from "../OrderTableHeader";
import OrderTableRow from "../OrderTableRow";

import useFetchCryptoDetail from "../../hooks/use-fetch-crypto-detail";

import styles from './style.module.scss'
import { API_STATUS_TYPES } from "../../../../utils/constants";

function OrderList({ id, type }) {

  const { status, data: marketsDetailData, error, refetch } = useFetchCryptoDetail(id, type)

  const orderBookData = marketsDetailData && marketsDetailData.orders;

  const topTenOrders = orderBookData ? orderBookData.slice(0, 10) : [];

  const renderContent = () => {
    if (status === API_STATUS_TYPES.IDLE) {
      return <EmptyOrderMessage />;
    }

    if (status === API_STATUS_TYPES.PENDING) {
      return <Loading />;
    }

    if (status === API_STATUS_TYPES.REJECTED) {
      return <ErrorMessage onRetry={refetch} message={error?.message} />;
    }

    if (status === API_STATUS_TYPES.RESOLVED) {
      return (
        <div className={styles.orderContainer}>
          <OrderTableHeader />
          {topTenOrders &&
            topTenOrders.map((order, index) => (
              <OrderTableRow
                key={index}
                price={order.price}
                value={order.value}
                remain={order.remain} />
            ))}
          <OrderSummaryDetails orders={topTenOrders} />
          <OrderPercentageCalculator orders={topTenOrders} />
        </div>
      );
    }

    return null;
  };


  return renderContent()
}

export default OrderList