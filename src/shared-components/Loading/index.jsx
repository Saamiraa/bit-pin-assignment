import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss'

function Loading() {
  return (
    <div className={styles.spinner}>
      <FontAwesomeIcon icon={faSpinner} spin className={styles.spinnerIcon} />
    </div>
  )
}

export default Loading