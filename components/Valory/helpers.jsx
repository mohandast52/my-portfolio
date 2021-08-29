export const URL = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&';

/**
 * to disable future date selections
 */
export const maxDate = new Date().toISOString().slice(0, 10);

/**
 * @returns {Promise}
 * @param {Number} from - date in UNIX timestamp
 * @param {Number} to - date in UNIX timestamp
 * @returns {Promise}
 */
export const fetchBitconPrice = async (from, to) => {
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
 * @returns {Number} - reduced value
 * @param {Array} array
 * @param {Function} fn
 * @param {Number} acc
 */
export const customReduce = (array, fn, acc = 0) => {
  let temp = acc;
  array.forEach(item => {
    temp = fn(temp, item);
  });
  return temp;
};
