/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import CryptoItem from "../CryptoItem";

import { t } from "i18next";

import styles from './style.module.scss';

function CryptoListContent({ currentPageMarketItems }) {

  const [isVisibleTransition, setIsVisibleTransition] = useState(false);

  useEffect(() => {
    setIsVisibleTransition(false);
    const timeout = setTimeout(() => {
      setIsVisibleTransition(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentPageMarketItems]);

  return (
    <div className={`${styles.cryptoList} ${isVisibleTransition ? styles.cryptoListVisible : ''}`}>
      <div className={styles.cryptoListHeader}>
        <p>{t("cryptoList.content.name")}</p>
        <p>{t("cryptoList.content.price")}</p>
      </div>
      {currentPageMarketItems.map((item) => (
        <CryptoItem data={item} key={item.id} />
      ))}
    </div>
  );
}

export default CryptoListContent;
