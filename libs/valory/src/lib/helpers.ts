export const URL = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&';

/* to disable future date selections */
export const maxDate = new Date().toISOString().slice(0, 10);

// CoinGecko market_chart response (only the field we read).
export interface MarketChart {
  prices: Array<[number, number]>;
}

/**
 * Fetch the bitcoin price series between two UNIX timestamps.
 */
export const fetchBitconPrice = async (from: number, to: number): Promise<MarketChart> => {
  const response = await fetch(
    `${URL}from=${Math.floor(from)}&to=${Math.floor(to)}`,
  );
  if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  throw new Error('Request Failed: Something went wrong');
};

/**
 * Reduce `array` to a single number using `fn`, starting from `acc`.
 */
export const customReduce = <T>(
  array: T[],
  fn: (acc: number, item: T) => number,
  acc = 0,
): number => {
  let temp = acc;
  array.forEach(item => {
    temp = fn(temp, item);
  });
  return temp;
};
