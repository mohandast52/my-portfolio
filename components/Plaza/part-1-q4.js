const list = [0, 2, 4, 6, 8];
const k = 4;

const fn = (total, i, array, finalOutput) => {
  if (total === k) {
    return finalOutput;
  }

  if (i === array.length) {
    return 'None';
  }

  return null;
};

fn(0, 0, list, '');
