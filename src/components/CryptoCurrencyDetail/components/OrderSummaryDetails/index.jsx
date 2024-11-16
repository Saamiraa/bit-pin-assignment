/* eslint-disable react/prop-types */
import { calculateTotal, weightedAveragePrice } from '../../../../utils/calculateDecimal'
import styles from './style.module.scss'

function OrderSummaryDetails({orders}) {
  return (
    <div className={styles.ordersListSummary}>
      <div className={styles.ordersListSummaryLabels}>
        <p>مجموع ارز باقی مانده</p>
        <p>مجموع ارزش ارز</p>
        <p>میانگین وزن‌دار قیمت</p>
      </div>
      <div className={styles.ordersListSummaryValues}>
        <p>{calculateTotal(orders, 'remain')}</p>
        <p>{calculateTotal(orders, 'value')}</p>
        <p>{Number(weightedAveragePrice(orders)).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default OrderSummaryDetails