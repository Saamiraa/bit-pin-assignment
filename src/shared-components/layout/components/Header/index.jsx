import icon from '../../../../assets/images/icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { t } from "i18next"
import styles from './style.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <ul className={styles.headerTitleList}>
          <li className={styles.headerTitleItem}>
            <a href="#">
              <img alt="bitPin" src={icon} />
            </a>
          </li>
          <li className={styles.headerTitleItem}>
            <a href="#">{t("layout.header.easyPurchase")}</a>
          </li>
          <li className={styles.headerTitleItem}>
            <a href="#">{t("layout.header.trade")}</a>
          </li>
          <li className={styles.headerTitleItem}>
            <a href="#">{t("layout.header.cryptoCurrencyPrice")}</a>
          </li>
          <li className={styles.headerTitleItem}>
            <a href="#">{t("layout.header.features")}</a>
          </li>
          <li className={styles.headerTitleItem}>
            <a href="#">{t("layout.header.education")}</a>
          </li>
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