/* eslint-disable no-console */
/*
const f = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName) return callback(new Error('firstName is required'));
    const fullName = `${firstName} Turing`;
    return callback(fullName);
  }, 2000);
};

f('Alan', console.log);
f(null, console.log);
*/

/**
 * using promise's resolve & reject method
 */
const myPromise = name => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (name) {
      resolve(`${name} Turing`);
    } else {
      reject(new Error('firstName is required'));
    }
  }, 2000);
});

(async () => {
  ['Alan', null].forEach(eachValue => {
    myPromise(eachValue)
      .then(value => console.log(value))
      .catch(error => console.log(error));
  });
})();
