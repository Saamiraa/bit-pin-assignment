/* eslint-disable react/prop-types */
import { useState } from 'react';
import { calculateTotalPayable, calculateTotalReceivableAmount, calculateTotalRemain, calculateWeightedAveragePrice } from '../../../../utils/calculateDecimal';
import OrderResult from '../OrderResult';

import { t } from "i18next";

import styles from './style.module.scss';

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
      setError(t("orderPercentageCalculator.error"));
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
        {t("orderPercentageCalculator.title")}
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
        >{t("orderPercentageCalculator.button")}
        </button>
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
      {modalVisible && <OrderResult onClose={closeModal} results={results} />}
    </div>
  )
}

export default OrderPercentageCalculator