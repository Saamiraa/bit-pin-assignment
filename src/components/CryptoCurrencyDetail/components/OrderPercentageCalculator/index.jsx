/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './style.module.scss';
import { calculateTotalPayable, calculateTotalReceivableAmount, calculateTotalRemain, calculateWeightedAveragePrice } from '../../../../utils/calculateDecimal';
import OrderResult from '../OrderResult';

function OrderPercentageCalculator({ orders }) {
  const [orderInput, setOrderInput] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [results, setResults] = useState({});

  const handleInputChange = (e) => {
    setOrderInput(e.target.value)
  }

  const handleCalculate = () => {
    const totalRemain = calculateTotalRemain(orders).toString()
    const totalReceivableAmount = calculateTotalReceivableAmount(orderInput, totalRemain)
    const totalPayable = calculateTotalPayable(orders, orderInput)
    const weightedAveragePrice = calculateWeightedAveragePrice(totalPayable, totalReceivableAmount)

    setResults({
      totalReceivableAmount,
      totalPayable,
      weightedAveragePrice,
    });
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

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
      <button className={styles.ordersListButton} onClick={handleCalculate}>محاسبه کن</button>
    </div>
    {modalVisible && <OrderResult onClose={closeModal} results={results} />}
  </div>
)
}

export default OrderPercentageCalculator