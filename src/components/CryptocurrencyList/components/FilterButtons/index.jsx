/* eslint-disable react/prop-types */

import Button from "../Button/Button";

import styles from './style.module.scss'

function FilterButtons({ activeTab, onTabChange }) {
  return (
    <div className={styles.filterButtonsContainer}>
      <div className={styles.filterButtons}>
        <Button
          isActive={activeTab === "irtTab"}
          onClick={() => onTabChange("irtTab")}
          label="تومان"
        />
        <Button
          isActive={activeTab === "usdtTab"}
          onClick={() => onTabChange("usdtTab")}
          label="تتر"
        />
      </div>
    </div>
  );
}

export default FilterButtons;
