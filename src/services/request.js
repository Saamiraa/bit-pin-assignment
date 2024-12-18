const fetchMarketsDataService = async (url, options = {}) => {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('failed to fetch data', error?.message)
  }
}

export default fetchMarketsDataService