/* eslint-disable react/prop-types */

import CryptoItem from "../CryptoItem";

import styles from './style.module.scss'

function CryptoListContent({ visibleMarkets }) {
  return (
    <div className={styles.cryptoList}>
      <div className={styles.cryptoListHeader}>
        <p>نام رمز ارز</p>
        <p>قیمت</p>
      </div>
      {visibleMarkets.map((item) => (
        <CryptoItem data={item} key={item.id} />
      ))}
    </div>
  );
}

export default CryptoListContent;
