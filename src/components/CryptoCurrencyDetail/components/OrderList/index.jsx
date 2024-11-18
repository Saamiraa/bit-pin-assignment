import useFetchCryptoDetail from "../../../../hooks/use-fetch-crypto-detail";

import ErrorMessage from "../../../../shared-components/ErrorMessage";
import Loading from "../../../../shared-components/Loading";
import EmptyOrderMessage from "../EmptyOrderMessage";
import OrderPercentageCalculator from "../OrderPercentageCalculator";
import OrderSummaryDetails from "../OrderSummaryDetails";
import OrderTableHeader from "../OrderTableHeader";
import OrderTableRow from "../OrderTableRow";

import styles from './style.module.scss'

function OrderList({ id, type }) {

  const { hasError, marketsDetailData, fetchMarketDetail } = useFetchCryptoDetail(id, type)

  const orderBookData = marketsDetailData && marketsDetailData.orders;

  const topTenOrders = orderBookData ? orderBookData.slice(0, 10) : [];

  const renderContent = () => {
    if (orderBookData && orderBookData.length === 0) return <EmptyOrderMessage />
    if (!marketsDetailData && !hasError) return <Loading />;
    if (hasError) return <ErrorMessage onRetry={fetchMarketDetail} />

    return (
      <div className={styles.orderContainer}>
        <OrderTableHeader />
        {topTenOrders && topTenOrders.map((order, index) => (
          <OrderTableRow key={index} price={order.price} value={order.value} remain={order.remain} />
        ))}
        <OrderSummaryDetails orders={topTenOrders} />
        <OrderPercentageCalculator orders={topTenOrders} />
      </div>
    )
  }

  return renderContent()
}

export default OrderList