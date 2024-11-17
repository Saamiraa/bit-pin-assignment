/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './style.module.scss';
import { calculateTotalPayable, calculateTotalReceivableAmount, calculateTotalRemain, calculateWeightedAveragePrice } from '../../../../utils/calculateDecimal';
import OrderResult from '../OrderResult';

function OrderPercentageCalculator({ orders }) {
  const [orderInput, setOrderInput] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [results, setResults] = useState({});
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    setOrderInput(e.target.value)
    setError('')
  }

  const handleCalculate = () => {
    const totalRemain = calculateTotalRemain(orders).toString()
    const totalReceivableAmount = calculateTotalReceivableAmount(orderInput, totalRemain)
    const totalPayable = calculateTotalPayable(orders, orderInput)
    const weightedAveragePrice = calculateWeightedAveragePrice(totalPayable, totalReceivableAmount)

    if (orderInput <= 0 || orderInput > 100) {
      setError('مقدار وارد شده باید بین ۱ تا ۱۰۰ درصد باشد.');
      return
    }

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
        <button
          className={styles.ordersListButton}
          onClick={handleCalculate}
          disabled={orderInput <= 0 && orderInput > 100}
        >محاسبه کن</button>
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
      {modalVisible && <OrderResult onClose={closeModal} results={results} />}
    </div>
  )
}

export default OrderPercentageCalculator