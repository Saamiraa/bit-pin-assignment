import icon from '../../../assets/images/icon.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { t } from "i18next";

import styles from './style.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <ul className={styles.headerTitleList}>
          <li className={styles.headerTitleItem}>
            <img alt="bitPin" src={icon} />
          </li>
          <li className={styles.headerTitleItem}>{t("layout.header.easyPurchase")}</li>
          <li className={styles.headerTitleItem}>{t("layout.header.trade")}</li>
          <li className={styles.headerTitleItem}>{t("layout.header.cryptoCurrencyPrice")}</li>
          <li className={styles.headerTitleItem}>{t("layout.header.features")}</li>
          <li className={styles.headerTitleItem}>{t("layout.header.education")}</li>
        </ul>
      </div>
      <div className={styles.headerThemeIcon}>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faMoon} />
        </a>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faSun} />
        </a>
      </div>
    </header>
  )
}

export default Header