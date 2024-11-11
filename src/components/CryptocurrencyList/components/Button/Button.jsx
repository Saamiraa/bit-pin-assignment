/* eslint-disable react/prop-types */
import styles from './style.module.scss'

function Button({ isActive, onClick, label }) {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={onClick}>
      {label}
    </button>
  )
}

export default Button