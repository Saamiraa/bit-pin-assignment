import styles from './style.module.scss';

function OrderPercentageCalculator() {
  return (
    <div className={styles.ordersListPercentageInput}>
      <h2 className={styles.ordersListPercentageTitle}>
        لطفا جهت محاسبه درخواست، میزان درصد درخواست را وارد کنید.
      </h2>
      <div className={styles.ordersListInputContainer}>
        <input type="text" className={styles.ordersListInput} />
        <button className={styles.ordersListButton}>محاسبه کن</button>
      </div>
    </div>
  )
}

export default OrderPercentageCalculator