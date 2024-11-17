/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Modal from "../../../../shared-components/Modal"

import { formatNumberToPersian } from "../../../../utils/localizedNumber"

import styles from './style.module.scss'

function OrderResult({ onClose, results }) {

  const totalReceivableAmount = results.totalReceivableAmount
  const totalPayable = Number(results.totalPayable).toFixed(2)
  const weightedAveragePrice = Number(results.weightedAveragePrice).toFixed(2)

  return (
    <Modal onClose={onClose}>
      <div className={styles.orderResultHeader}>
        <h3 className={styles.orderResultTitle}>نتایج محاسبه</h3>
        <button className={styles.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.orderResultContainer}>
        <div className={styles.orderResultInfo}>
          <p className={styles.orderResultLabel}>مجموع حجم ارز قابل دریافت</p>
          <p className={styles.orderResultLabel}>مجموع مبلغ قابل پرداخت</p>
          <p className={styles.orderResultLabel}>میانگین وزنی قیمت</p>
        </div>
        <div className={styles.orderResultValues}>
          <p className={styles.orderResultValue}>{formatNumberToPersian(+totalReceivableAmount)}</p>
          <p className={styles.orderResultValue}>{formatNumberToPersian(+totalPayable)}</p>
          <p className={styles.orderResultValue}>{formatNumberToPersian(+weightedAveragePrice)}</p>
        </div>
      </div>
    </Modal>
  )
}

export default OrderResult
