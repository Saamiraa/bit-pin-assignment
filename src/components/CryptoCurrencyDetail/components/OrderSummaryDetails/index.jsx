/* eslint-disable react/prop-types */
import { calculateTotal, weightedAveragePrice } from '../../../../utils/calculateDecimal'
import { formatNumberToPersian } from '../../../../utils/localizedNumber'

import { t } from "i18next";

import styles from './style.module.scss'

function OrderSummaryDetails({ orders }) {

  const remain = calculateTotal(orders, 'remain');
  const value = calculateTotal(orders, 'value')
  const price = Number(weightedAveragePrice(orders)).toFixed(2)

  return (
    <div className={styles.ordersListSummary}>
      <div className={styles.ordersListSummaryLabels}>
        <p>{t("orderSummary.labels.remainingAmount")}</p>
        <p>{t("orderSummary.labels.totalValue")}</p>
        <p>{t("orderSummary.labels.weightedAveragePrice")}</p>
      </div>
      <div className={styles.ordersListSummaryValues}>
        <p>{formatNumberToPersian(+remain)}</p>
        <p>{formatNumberToPersian(+value)}</p>
        <p>{formatNumberToPersian(+price)}</p>
      </div>
    </div>
  )
}

export default OrderSummaryDetails