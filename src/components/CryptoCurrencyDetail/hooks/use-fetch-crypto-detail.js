import { useCallback, useEffect, useState } from "react";

import { API_STATUS_TYPES } from "../../../utils/constants";

import fetchMarketsDataService from "../../../services/request";

function useFetchCryptoDetail(marketId, queryType) {

  const [state, setState] = useState({
    status: API_STATUS_TYPES.IDLE,
    data: null,
    error: null
  })

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
    if (state.status === API_STATUS_TYPES.IDLE) {
      setState({ status: API_STATUS_TYPES.PENDING, data: null, error: null })
    }
    fetchMarketsDataService(url)
      .then((response) => {
        setState({ status: API_STATUS_TYPES.RESOLVED, data: response, error: null })
      })
      .catch((error) => {
        setState({ status: API_STATUS_TYPES.REJECTED, data: null, error })
      })
  }, [marketId, queryType, state.status])

  useEffect(() => {

    if (state.status === API_STATUS_TYPES.REJECTED) return

    fetchMarketDetail()

    const intervalId = setInterval(() => {
      fetchMarketDetail()
    }, 5000);

    return () => clearInterval(intervalId)

  }, [fetchMarketDetail, state.error, state.status])

  return {
    status: state.status,
    data: state.data,
    error: state.error,
    refetch: fetchMarketDetail
  }
}

export default useFetchCryptoDetail