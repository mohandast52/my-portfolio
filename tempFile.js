const checkArray = list => !!list.some(l => l === null);

function all(list) {
  /*
  => []
  => loop through the list
  */

  return new Promise(resolve => {
    const array = [];

    for (let i = 0; i < list.length; i += 1) {
      const promise = list[i];
      console.log(promise, i);

      promise.then(result => {
        array[i] = result;

        console.log(result);
        // if all promise have been resolved in the array!
        if (checkArray(array)) {
          resolve(array);
        }
      });
    }
  });
}

const p1 = new Promise(resolve => resolve('a'));
const p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve('b');
  }, 1000);
});
const p3 = new Promise(resolve => {
  setTimeout(() => {
    resolve('c');
  }, 2000);
});

console.log(all([p1, p2, p3]));

/*
4 siblings

function onChange({ event }) {
  setValue(target.value);
  if(target.value === "hello") {
    return componentIndex;
  }
}


*/
