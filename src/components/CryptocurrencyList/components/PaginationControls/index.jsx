/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.scss'

function PaginationControls({ onPageChange, totalPages, currentPage }) {
  return (
    <div className={styles.paginationControls}>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.paginationButton}
      >
        <FontAwesomeIcon icon={faAnglesRight} />
      </button>
      <span>{currentPage.toLocaleString("fa-IR")} از {totalPages.toLocaleString("fa-IR")} </span>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.paginationButton}
      >
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>
    </div>
  )
}

export default PaginationControls