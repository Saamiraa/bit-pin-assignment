import { useState } from "react";

import useFetchCryptoMarket from "./hooks/use-fetch-crypto-market";

import Loading from "../../shared-components/Loading";
import ErrorMessage from "../../shared-components/ErrorMessage";

import FilterButtons from "./components/FilterButtons";
import CryptoListContent from "./components/CryptoListContent";
import PaginationControls from "./components/PaginationControls";
import InitialPlaceholder from "./components/InitialPlaceholder";

import { API_STATUS_TYPES } from "../../utils/constants";

import styles from './style.module.scss'

function CryptocurrencyList() {

  const { status, data, error, refetch } = useFetchCryptoMarket()

  const [activeTab, setActiveTab] = useState("irtTab")

  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 10

  const usdtMarkets = data?.filter((currency) => currency.currency2.code === "USDT")
  const irtMarkets = data?.filter((currency) => currency.currency2.code === "IRT")

  const currentMarkets = activeTab === "irtTab" ? irtMarkets : usdtMarkets;

  const totalPages = Math.ceil(currentMarkets.length / itemsPerPage);

  const visibleItemsPerPage = currentMarkets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const renderContent = () => {
    switch (status) {
      case API_STATUS_TYPES.IDLE:
        return <InitialPlaceholder />;
      case API_STATUS_TYPES.PENDING:
        return <Loading />;
      case API_STATUS_TYPES.REJECTED:
        return <ErrorMessage message={error?.message} onRetry={refetch} />
      case API_STATUS_TYPES.RESOLVED:
        return (
          <div className={styles.cryptoContainer}>
            <FilterButtons activeTab={activeTab} onTabChange={setActiveTab} />
            <CryptoListContent currentPageMarketItems={visibleItemsPerPage} />
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )
      default:
        return null
    }
  }
  return renderContent()
}

export default CryptocurrencyList;