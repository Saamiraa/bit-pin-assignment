/* eslint-disable react/prop-types */

import CryptoItem from "../CryptoItem";

import { t } from "i18next"

import styles from './style.module.scss'

function CryptoListContent({ visibleMarkets }) {
  return (
    <div className={styles.cryptoList}>
      <div className={styles.cryptoListHeader}>
        <p>{t("cryptoList.content.name")}</p>
        <p>{t("cryptoList.content.price")}</p>
      </div>
      {visibleMarkets.map((item) => (
        <CryptoItem data={item} key={item.id} />
      ))}
    </div>
  );
}

export default CryptoListContent;