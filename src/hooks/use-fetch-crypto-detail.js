import { useCallback, useEffect, useState } from 'react'
import fetchMarketsDataService from '../services/request'

function useFetchCryptoDetail(marketId, queryType) {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [marketsDetailData, setMarketsDetailData] = useState([])

  const fetchMarketDetail = useCallback(() => {

    if (!marketId || !queryType) return;

    let url;

    if (queryType === 'sell' || queryType === 'buy') {
      url = `https://api.bitpin.org/v2/mth/actives/${marketId}/?type=${queryType}`
    } else if (queryType === 'matches') {
      url = `https://api.bitpin.org/v1/mth/matches/${marketId}/`
    } else {
      return
    }

    setIsLoading(true);
    setHasError(false);
    fetchMarketsDataService(url)
      .then((data) => {
        setMarketsDetailData(data)
        setHasError(false)
      })
      .catch(() => {
        setHasError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [marketId, queryType])

  useEffect(() => {
    if (hasError) return;

    fetchMarketDetail();

    const intervalId = setInterval(() => {
      fetchMarketDetail()
    }, 3000);

    return () => {
      clearInterval(intervalId)
    }
  }, [fetchMarketDetail, hasError])

  return { isLoading, hasError, marketsDetailData, fetchMarketDetail }
}

export default useFetchCryptoDetail;