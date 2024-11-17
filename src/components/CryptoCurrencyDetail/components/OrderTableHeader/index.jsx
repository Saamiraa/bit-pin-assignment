import { t } from "i18next";

import styles from './style.module.scss'

function OrderTableHeader() {
  return (
    <div className={styles.orderHeader}>
      <p className={styles.orderHeaderItem}>{t("orderTable.header.price")}</p>
      <p className={styles.orderHeaderItem}>{t("orderTable.header.value")}</p>
      <p className={styles.orderHeaderItem}>{t("orderTable.header.remaining")}</p>
    </div>
  )
}

export default OrderTableHeader