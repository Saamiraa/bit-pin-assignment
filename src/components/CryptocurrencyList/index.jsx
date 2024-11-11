import { useState } from "react"
import useFetchCryptoMarket from "../../hooks/use-fetch-crypto-market"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'
import Button from "./components/Button/Button"
import CryptoItem from "./components/CryptoItem"
import Loading from "../../shared-components/Loading"
import ErrorMessage from "../../shared-components/ErrorMessage"

function CryptocurrencyList() {
  const { isLoading, hasError, marketsData } = useFetchCryptoMarket()

  const [activeTab, setActiveTab] = useState("irtTab")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10;

  const usdtMarkets = marketsData.filter((currency) => currency.currency2.code === "USDT")

  const irtMarkets = marketsData.filter((currency) => currency.currency2.code === "IRT")

  const currentMarkets = activeTab === "irtTab" ? irtMarkets : usdtMarkets;
  const totalPages = Math.ceil(currentMarkets.length / itemsPerPage);

  const visibleMarkets = currentMarkets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const renderContent = () => {
    if (isLoading) {
      return <Loading />
    }
    if (hasError) {
      return <ErrorMessage />
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
          <div className={styles.cryptoListHeader}>
            <p>نام رمز ارز</p>
            <p>قیمت</p>
          </div>
          {visibleMarkets.map((item) => (
            <CryptoItem data={item} key={item.id} />
          ))}
        </div>
        <div className={styles.paginationControls}>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={styles.paginationButton}
          >
            <FontAwesomeIcon icon={faAnglesRight} />
          </button>
          <span>{currentPage.toLocaleString("fa-IR")} از {totalPages.toLocaleString("fa-IR")} </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={styles.paginationButton}
          >
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>
        </div>
      </div>
    )
  }

  return renderContent()
}

export default CryptocurrencyList