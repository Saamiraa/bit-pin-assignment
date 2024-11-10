/* eslint-disable react/prop-types */
import styles from './styles.module.scss'

function Button({ isActive, onClick, label }) {
  return (
    <button
      className={`${styles.filterButton} ${isActive ? styles.active : ""}`}
      onClick={onClick}>
      {label}
    </button>
  )
}

export default Button