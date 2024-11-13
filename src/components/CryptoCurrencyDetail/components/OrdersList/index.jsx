import useFetchCryptoDetail from "../../../../hooks/use-fetch-crypto-detail";

import ErrorMessage from "../../../../shared-components/ErrorMessage";
import Loading from "../../../../shared-components/Loading";

import styles from './style.module.scss'

function OrdersList({ id, type }) {

  const { isLoading, hasError, marketsDetailData, fetchMarketDetail } = useFetchCryptoDetail(id, type)

  const orderBookData = marketsDetailData.orders;

  const topTenOrders = orderBookData ? orderBookData.slice(0, 10) : [];

  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (hasError) return <ErrorMessage onRetry={fetchMarketDetail} />

    return (
      <div className={styles.orderContainer}>
        <div className={styles.orderHeader}>
          <p className={styles.orderHeaderItem}>قیمت</p>
          <p className={styles.orderHeaderItem}>ارزش</p>
          <p className={styles.orderHeaderItem}>باقی مانده</p>
        </div>
        {topTenOrders && topTenOrders.map((order, index) => (
          <div key={index} className={styles.orderRows}>
            <p className={styles.orderPrice}>{order.price}</p>
            <p className={styles.orderValue}>{order.value}</p>
            <p className={styles.orderRemaining}>{order.remain}</p>
          </div>
        ))}
      </div>
    )
  }

  return renderContent()
}

export default OrdersList