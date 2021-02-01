/* eslint-disable no-console */
const list = [0, 2, 4, 6, 8];
const k = 4;

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

fn(0, 0, list, '');

/**
 * Time complexity: 2^n as we are either selecting the value or not-selecting
 * which call recursively.
 */
