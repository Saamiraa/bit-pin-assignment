import { useCallback, useEffect, useState } from "react";
import fetchMarketsDataService from "../services/request";

function useFetchCryptoMarket() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [marketsData, setMarketsData] = useState([]);

  const fetchMarkets = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
    fetchMarketsDataService('https://api.bitpin.org/v1/mkt/markets/')
      .then((data) => {
        setMarketsData(data.results);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [fetchMarkets]);

  return { isLoading, hasError, marketsData };
}

export default useFetchCryptoMarket;
