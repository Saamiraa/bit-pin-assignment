import { useState } from "react"
import useFetchCryptoMarket from "../../hooks/use-fetch-crypto-market"

import styles from './styles.module.scss'
import Button from "./components/Button/Button"
import CryptoItem from "./components/CryptoItem"

function CryptocurrencyList() {
  const { isLoading, hasError, marketsData } = useFetchCryptoMarket()

  const [activeTab, setActiveTab] = useState("irtTab")

  const usdtMarkets = marketsData.filter((currency) => currency.currency2.code === "USDT")

  const irtMarkets = marketsData.filter((currency) => currency.currency2.code === "IRT")

  const renderContent = () => {
    if (isLoading) {
      return <p>loading</p>
    }
    if (hasError) {
      return <p>error</p>
    }
    return (
      <div className={styles.cryptoContainer}>
        <div className={styles.filterButtonsContainer}>
          <div className={styles.filterButtons}>
            <Button
              isActive={activeTab === "irtTab"}
              onClick={() => setActiveTab("irtTab")}
              label="تومان"
            />
            <Button
              isActive={activeTab === "usdtTab"}
              onClick={() => setActiveTab("usdtTab")}
              label="تتر"
            />
          </div>
        </div>
        <div className={styles.cryptoList}>
          {activeTab === "irtTab" ?
            irtMarkets.map((item) => <CryptoItem data={item.currency1} price={item.price} code={item.code} key={item.id} />) :
            usdtMarkets.map((item) => <CryptoItem data={item.currency1} price={item.price} code={item.code} key={item.id} />
            )}
        </div>
      </div>
    )
  }

  return renderContent()
}

export default CryptocurrencyList