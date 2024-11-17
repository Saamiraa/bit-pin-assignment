/* eslint-disable react/prop-types */
import { calculateTotal, weightedAveragePrice } from '../../../../utils/calculateDecimal'
import { formatNumberToPersian } from '../../../../utils/localizedNumber'
import styles from './style.module.scss'

function OrderSummaryDetails({ orders }) {

  const remain = calculateTotal(orders, 'remain');
  const value = calculateTotal(orders, 'value')
  const price = Number(weightedAveragePrice(orders)).toFixed(2)

  return (
    <div className={styles.ordersListSummary}>
      <div className={styles.ordersListSummaryLabels}>
        <p>مجموع ارز باقی مانده</p>
        <p>مجموع ارزش ارز</p>
        <p>میانگین وزن‌دار قیمت</p>
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