import { useParams } from "react-router-dom";

import Loading from "../../../../shared-components/Loading";
import ErrorMessage from "../../../../shared-components/ErrorMessage";

import { getPersianDateTime } from "../../../../utils/time";
import { formatNumberToPersian } from "../../../../utils/localizedNumber";

import EmptyOrderMessage from "../EmptyOrderMessage";

import useFetchCryptoDetail from "../../hooks/use-fetch-crypto-detail";

import { t } from "i18next";

import styles from './style.module.scss'
import { API_STATUS_TYPES } from "../../../../utils/constants";

function Transactions() {
  const { id } = useParams();

  const { status, data: marketsDetailData, refetch } = useFetchCryptoDetail(id, "matches");

  const topTenOrders = marketsDetailData ? marketsDetailData.slice(0, 10) : [];

  const renderContent = () => {
    if (status === API_STATUS_TYPES.PENDING) {
      return <Loading />;
    }
    if (topTenOrders && topTenOrders.length === 0) {
      return <EmptyOrderMessage />;
    }

    if (status === API_STATUS_TYPES.REJECTED) {
      return <ErrorMessage onRetry={refetch} />;
    }
    if (status === API_STATUS_TYPES.RESOLVED) {
      return (
        <div className={styles.transactionsContainer}>
          <div className={styles.transactionsHeader}>
            <p className={styles.transactionsHeaderItem}>{t("transactions.header.price")}</p>
            <p className={styles.transactionsHeaderItem}>{t("transactions.header.amount")}</p>
            <p className={styles.transactionsHeaderItem}>{t("transactions.header.time")}</p>
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
    }
  }
  return renderContent()
}

export default Transactions;
