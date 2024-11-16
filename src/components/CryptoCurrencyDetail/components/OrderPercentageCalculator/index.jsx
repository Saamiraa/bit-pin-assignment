/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './style.module.scss';
import { calculateTotalPayable, calculateTotalReceivableAmount, calculateTotalRemain, calculateWeightedAveragePrice } from '../../../../utils/calculateDecimal';

function OrderPercentageCalculator({ orders }) {
  console.log(orders)
  const [orderInput, setOrderInput] = useState('')

  const handleInputChange = (e) => {
    setOrderInput(e.target.value)
  }

  const totalRemain = calculateTotalRemain(orders).toString()

  const totalReceivableAmount = calculateTotalReceivableAmount(orderInput, totalRemain)

  const totalPayable = calculateTotalPayable(orders, orderInput)

  const weightedAveragePrice = calculateWeightedAveragePrice(totalPayable, totalReceivableAmount)
  console.log(weightedAveragePrice)

  return (
    <div className={styles.ordersListPercentageInput}>
      <h2 className={styles.ordersListPercentageTitle}>
        لطفا جهت محاسبه درخواست، میزان درصد درخواست را وارد کنید.
      </h2>
      <div className={styles.ordersListInputContainer}>
        <input
          type="text"
          className={styles.ordersListInput}
          onChange={handleInputChange}
        />
        <button className={styles.ordersListButton}>محاسبه کن</button>
      </div>
    </div>
  )
}

export default OrderPercentageCalculator