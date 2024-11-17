import { useParams } from "react-router-dom";

import styles from './style.module.scss'
import useFetchCryptoDetail from "../../../hooks/use-fetch-crypto-detail";
import Loading from "../../../shared-components/Loading";
import ErrorMessage from "../../../shared-components/ErrorMessage";
import { getPersianDateTime } from "../../../utils/time";
import { formatNumberToPersian } from "../../../utils/localizedNumber";
import EmptyOrderMessage from "../components/EmptyOrderMessage";

function Transactions() {
  const { id } = useParams();

  const { hasError, marketsDetailData, fetchMarketDetail } = useFetchCryptoDetail(id, "matches");

  const matches = Array.isArray(marketsDetailData) ? marketsDetailData : [];

  const topTenOrders = matches.slice(0, 10);

  const renderContent = () => {
    if (marketsDetailData && marketsDetailData.length === 0 && !hasError) return <Loading />;
    if (matches && matches.length === 0) return <EmptyOrderMessage />;
    if (hasError) return <ErrorMessage onRetry={fetchMarketDetail} />;

    return (
      <div className={styles.transactionsContainer}>
        <div className={styles.transactionsHeader}>
          <p className={styles.transactionsHeaderItem}>قیمت</p>
          <p className={styles.transactionsHeaderItem}>مقدار معامله‌شده</p>
          <p className={styles.transactionsHeaderItem}>زمان</p>
        </div>
        {topTenOrders.map((order, index) => (
          <div key={index} className={styles.transactionsRows}>
            <p className={styles.transactionsValue}>{formatNumberToPersian(+order.price)}</p>
            <p className={styles.transactionsValue}>{formatNumberToPersian(+order.match_amount)}</p>
            <p className={styles.transactionsValue}>{getPersianDateTime(order.time * 1000)}</p>
          </div>
        ))}
      </div>
    );
  };

  return renderContent();
}

export default Transactions;
