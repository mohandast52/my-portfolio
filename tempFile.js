const nested = {
  A: '12',
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
      Q: {
        H: [40, 1, 2],
      },
    },
  },
};

/*
op:
{
  A: ‘12’,
  B: 23,
  C.P: 23,
  C.O.L: 56
}

str="C"
C


str.
*/

const finalObj = {};

const fn = (keyTemp, obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      fn(keyTemp ? `${keyTemp}${key}.` : `${key}.`, value);
    } else {
      finalObj[`${keyTemp}${key}`] = value;
    }
  });

  return finalObj;
};

console.log(fn('', nested));
// console.log(typeof []);
// console.log(Array.isArray([]));
// console.log(Object.entries(['1', '2']));
