import styles from './style.module.scss'

function OrderTableHeader() {
  return (
    <div className={styles.orderHeader}>
      <p className={styles.orderHeaderItem}>قیمت</p>
      <p className={styles.orderHeaderItem}>ارزش</p>
      <p className={styles.orderHeaderItem}>باقی مانده</p>
    </div>
  )
}

export default OrderTableHeader