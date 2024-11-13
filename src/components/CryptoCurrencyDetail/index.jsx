import { useState } from 'react'
import styles from './style.module.scss'
import Buy from './components/OrdersList/components/Buy'
import Sell from './components/OrdersList/components/Sell'
import Transactions from './components/Transactions'

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
          <p>سفارشات خرید</p>
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'sellOrders' ? styles.activeTab : styles.defaultTab}`}
          onClick={() => handleTabClick('sellOrders')}>
          <p>سفارشات فروش</p>
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'trades' ? styles.activeTab : styles.defaultTab}`}
          onClick={() => handleTabClick('trades')}>
          <p>معاملات</p>
        </div>
      </div>
      <div className={styles.detailsContent}>
        {activeTab === 'buyOrders' && <Buy />}
        {activeTab === 'sellOrders' && <Sell />}
        {activeTab === 'trades' && <Transactions />}
      </div>
    </div>
  )
}

export default CryptoCurrencyDetail
