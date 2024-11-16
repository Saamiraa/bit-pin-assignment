/* eslint-disable react/prop-types */

import styles from './style.module.scss'

function ModalOverlay({ children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default ModalOverlay