/* eslint-disable react/prop-types */
import styles from './style.module.scss'

function Backdrop({ onClose }) {
  return (
    <div className={styles.backdrop} onClick={onClose} />
  )
}

export default Backdrop