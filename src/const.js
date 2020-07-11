const SortTypes = {
  POPULAR: `popular`,
  PRICE_LOW_HIGH: `priceLowHigh`,
  PRICE_HIGH_LOW: `priceHighLow`,
  TOP_RATED_FIRST: `topRatedFirst`
};

const SortTypeTexts = {
  [SortTypes.POPULAR]: `Popular`,
  [SortTypes.PRICE_LOW_HIGH]: `Price: low to high`,
  [SortTypes.PRICE_HIGH_LOW]: `Price: high to low`,
  [SortTypes.TOP_RATED_FIRST]: `Top rated first`,
};

export {SortTypes, SortTypeTexts};
