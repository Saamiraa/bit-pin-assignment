/* eslint-disable react/prop-types */
import Modal from "../../../../shared-components/Modal"

function OrderResult({ onClose, results }) {
  return (
    <Modal onClose={onClose}>
      <h3>نتایج محاسبه</h3>
      <p>مجموع حجم ارز قابل دریافت: {results.totalReceivableAmount}</p>
      <p>مجموع مبلغ قابل پرداخت: {results.totalPayable}</p>
      <p>میانگین وزنی قیمت: {results.weightedAveragePrice}</p>
      <button onClick={onClose}>بستن</button>
    </Modal>
  )
}

export default OrderResult