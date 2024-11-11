/* eslint-disable react/prop-types */

import Button from "../Button/Button";

import { t } from "i18next"

import styles from './style.module.scss'

function FilterButtons({ activeTab, onTabChange }) {
  return (
    <div className={styles.filterButtonsContainer}>
      <div className={styles.filterButtons}>
        <Button
          isActive={activeTab === "irtTab"}
          onClick={() => onTabChange("irtTab")}
          label={t("cryptoList.filterButtons.tomanButton")}
        />
        <Button
          isActive={activeTab === "usdtTab"}
          onClick={() => onTabChange("usdtTab")}
          label={t("cryptoList.filterButtons.tetherButton")}
        />
      </div>
    </div>
  );
}

export default FilterButtons;