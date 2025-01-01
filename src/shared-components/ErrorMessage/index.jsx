/* eslint-disable react/prop-types */

import { t } from "i18next"

import styles from './styles.module.scss';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className={styles.errorMessage}>
      <p className={styles.errorMessageText}>{message || t("error.errorMessage")}</p>
      <div className={styles.errorMessageButtonContainer}>
        <button className={styles.errorMessageButton} onClick={onRetry}>
          {t("error.retry")}
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;