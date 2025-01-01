import { useState } from 'react'

import Buy from './components/Buy';
import Sell from './components/Sell';
import Transactions from './components/Transactions';

import { t } from 'i18next';

import styles from './style.module.scss'

function CryptoCurrencyDetail() {

  const [activeTab, setActiveTab] = useState('buyOrders')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className={styles.cryptoDetailContainer}>
      <div className={styles.sectionHeader}>
        <div
          className={`${styles.tab} ${activeTab === 'buyOrders' ? styles.activeTab : styles.defaultTab}`}
          onClick={() => handleTabClick('buyOrders')}>
          <p>{t('cryptoCurrencyDetail.tabs.buyOrders')}</p>
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'sellOrders' ? styles.activeTab : styles.defaultTab}`}
          onClick={() => handleTabClick('sellOrders')}>
          <p>{t('cryptoCurrencyDetail.tabs.sellOrders')}</p>
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'trades' ? styles.activeTab : styles.defaultTab}`}
          onClick={() => handleTabClick('trades')}>
          <p>{t('cryptoCurrencyDetail.tabs.trades')}</p>
        </div>
      </div>
      <div className={styles.detailsContent}>
        {activeTab === 'buyOrders' && <Buy />}
        {activeTab === 'sellOrders' && <Sell />}
        {activeTab === 'trades' && <Transactions />}
      </div>
    </div>
  );
}

export default CryptoCurrencyDetail
