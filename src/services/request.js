const fetchMarketsDataService = async (...args) => {
  try {
    const response = await fetch(...args);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error?.message}`);
  }
};

export default fetchMarketsDataService;