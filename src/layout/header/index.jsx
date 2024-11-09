import icon from '../../assets/images/icon.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { t } from "i18next";

function Header() {
  return (
    <header>
      <div>
        <ul>
          <li>
            <img alt="bitPin" src={icon} />
          </li>
          <li>{t("layout.header.easyPurchase")}</li>
          <li>{t("layout.header.trade")}</li>
          <li>{t("layout.header.cryptoCurrencyPrice")}</li>
          <li>{t("layout.header.features")}</li>
          <li>{t("layout.header.education")}</li>
        </ul>
      </div>
      <div>
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