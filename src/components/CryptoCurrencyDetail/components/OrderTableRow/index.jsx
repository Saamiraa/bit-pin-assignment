/* eslint-disable react/prop-types */
import styles from './style.module.scss'

function OrderTableRow({ price, value, remain }) {
  return (
    <div className={styles.orderRows}>
      <p className={styles.orderPrice}>{price}</p>
      <p className={styles.orderValue}>{value}</p>
      <p className={styles.orderRemaining}>{remain}</p>
    </div>
  )
}

export default OrderTableRow