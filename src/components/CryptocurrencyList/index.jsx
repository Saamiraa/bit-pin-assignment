import { useState } from "react";

import useFetchCryptoMarket from "../../hooks/use-fetch-crypto-market";

import Loading from "../../shared-components/Loading";
import ErrorMessage from "../../shared-components/ErrorMessage";



import styles from './style.module.scss'
import FilterButtons from "./components/FilterButtons";
import CryptoListContent from "./components/CryptoListContent";
import PaginationControls from "./components/PaginationControls";

function CryptocurrencyList() {
  const { isLoading, hasError, marketsData } = useFetchCryptoMarket();

  const [activeTab, setActiveTab] = useState("irtTab");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const usdtMarkets = marketsData.filter((currency) => currency.currency2.code === "USDT");
  const irtMarkets = marketsData.filter((currency) => currency.currency2.code === "IRT");

  const currentMarkets = activeTab === "irtTab" ? irtMarkets : usdtMarkets;
  const totalPages = Math.ceil(currentMarkets.length / itemsPerPage);

  const visibleMarkets = currentMarkets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (hasError) return <ErrorMessage />;

    return (
      <div className={styles.cryptoContainer}>
        <FilterButtons activeTab={activeTab} onTabChange={setActiveTab} />
        <CryptoListContent visibleMarkets={visibleMarkets} />
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  }

  return renderContent()
}

export default CryptocurrencyList;
