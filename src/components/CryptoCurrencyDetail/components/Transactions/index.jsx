import { useParams } from "react-router-dom";

import useFetchCryptoDetail from "../../../../hooks/use-fetch-crypto-detail";

import Loading from "../../../../shared-components/Loading";
import ErrorMessage from "../../../../shared-components/ErrorMessage";

import styles from './style.module.scss'
import { getPersianDateTime } from "../../../../utils/time";

function Transactions() {

  const { id } = useParams()

  const { isLoading, hasError, marketsDetailData, fetchMarketDetail } = useFetchCryptoDetail(id, 'matches')

  const topTenOrders = marketsDetailData ? marketsDetailData.slice(0, 10) : [];

  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (hasError) return <ErrorMessage onRetry={fetchMarketDetail} />

    return (
      <div className={styles.transactionsContainer}>
        <div className={styles.transactionsHeader}>
          <p className={styles.transactionsHeaderItem}>قیمت</p>
          <p className={styles.transactionsHeaderItem}>مقدار معامله‌شده</p>
          <p className={styles.transactionsHeaderItem}>زمان</p>
        </div>
        {topTenOrders && topTenOrders.map((order, index) => (
          <div key={index} className={styles.transactionsRows}>
            <p className={styles.transactionsPrice}>{order.price}</p>
            <p className={styles.transactionsValue}>{order.match_amount}</p>
            <p className={styles.transactionsRemaining}>{getPersianDateTime(order.time * 1000)}</p>
          </div>
        ))}
      </div>
    )
  }

  return renderContent()
}

export default Transactions