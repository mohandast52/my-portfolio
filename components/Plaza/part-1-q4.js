/* eslint-disable no-console */
const list = [3, 6, 10, -15, 1];
const k = 35;

const fn = (total, i, array, finalOp) => {
  if (total === k) {
    console.log(finalOp);
    return true;
  }

  if (i === array.length) {
    return false;
  }

  fn(total + array[i], i + 1, array, `${finalOp}+${array[i]}`);
  fn(total - array[i], i + 1, array, `${finalOp}-${array[i]}`);

  return null;
};

if (!fn(0, 0, list, '')) {
  console.log('None');
}

/**
 * Will print all the possible o/p!
 *
 * Time complexity: 2^n as we are either selecting the value or not-selecting
 * which call recursively.
 */
