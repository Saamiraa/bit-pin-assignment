/* eslint-disable react/prop-types */
import { formatNumberToPersian } from '../../../../utils/localizedNumber'

import styles from './style.module.scss'

function OrderTableRow({ price, value, remain }) {
  return (
    <div className={styles.orderRows}>
      <p className={styles.orderPrice}>{formatNumberToPersian(+price)}</p>
      <p className={styles.orderValue}>{formatNumberToPersian(+value)}</p>
      <p className={styles.orderRemaining}>{formatNumberToPersian(+remain)}</p>
    </div>
  )
}

export default OrderTableRow