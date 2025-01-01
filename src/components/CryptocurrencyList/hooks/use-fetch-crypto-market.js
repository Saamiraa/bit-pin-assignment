import { useCallback, useEffect, useState } from "react";

import fetchMarketsDataService from "../../../services/request";

import { API_STATUS_TYPES } from "../constants";

function useFetchCryptoMarket() {

  const [state, setState] = useState({
    status: API_STATUS_TYPES.IDLE,
    data: [],
    error: null
  })

  const fetchMarkets = useCallback(() => {
    setState((prevState) => ({ ...prevState, status: API_STATUS_TYPES.PENDING }))
    fetchMarketsDataService('https://api.bitpin.org/v1/mkt/markets/')
      .then((data) => {
        setState({ status: API_STATUS_TYPES.RESOLVED, data: data.results, error: null })
      })
      .catch((error) => {
        setState({ status: API_STATUS_TYPES.REJECTED, error, data: [] })
      })
  }, [])

  useEffect(() => {
    fetchMarkets()
  }, [fetchMarkets])


  return {
    status: state.status,
    data: state.data,
    error: state.error,
    refetch: fetchMarkets
  }
}

export default useFetchCryptoMarket