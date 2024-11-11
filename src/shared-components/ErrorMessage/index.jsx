/* eslint-disable react/prop-types */
import styles from './styles.module.scss';

function ErrorMessage({ onRetry }) {
  return (
    <div className={styles.errorMessage}>
      <p className={styles.errorMessageText}>error</p>
      <div className={styles.errorMessageButtonContainer}>
        <button className={styles.errorMessageButton} onClick={onRetry}>
          retry
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;