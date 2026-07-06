// function say() {
//   console.log(this.name);
// }

// const obj = { name: 'mohan' };
// say();

// say.call(obj);
// // call, apply, bind

// const obj = {
//   name: 'mohan',
//   get: () => {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// obj.get();

// function name() {
//   console.log(a); // a = undefined
//   var a = 10; // a = 10
//   console.log(a);
// }
// name();

// const ff = () => {}; // ff = undefined!

// disadvantage of closure
// const fn1 = () => {
//   const a = 10;
//   return () => {
//     console.log(a);
//   };
// };

// fn1()();
// const arr = [];
// Array.prototype.myMap = () => {};
// arr.m

// function flatten(arr) {
//   const finalArray = [];

//   function helper(passedArray) {
//     for (let i = 0; i < passedArray.length; i += 1) {
//       const element = passedArray[i];

//       if (Array.isArray(element)) {
//         helper(element);
//       } else {
//         finalArray.push(element);
//       }
//     }
//   }

//   helper(arr);

//   return finalArray;
// }
// console.log(flatten([9, 3, [2, 5, 8, [1, 1], [2, 3]], [1], [1]]));
// console.log(flatten([9, 3, [2, 5, 8, [1, 1], [2, 3]], [1], [1]]));
// [9, 3, 2, 5, 8, 1, 1, 2, 3, 1, 1]

// a, b, c, d
// function getValue(obj, path) {
//   // obj[a]
//   const helper = (objPassed, p) => {
//     // if (objPassed === '') {
//     //   if (objPassed[p]) {
//     //   }
//     // }
//     console.log(objPassed);
//   };

//   const convertedPath = path.split('.');
//   let ok = obj;
//   for (let i = 0; i < convertedPath.length; i += 1) {
//     if (obj[convertedPath[i]]) {
//       ok =
//     }
//   }
//   console.log(convertedPath);
// }

// const getValue = () => {

// };

// console.log(
//   getValue(
//     {
//       a: {
//         b: {
//           c: {
//             d: 'test',
//           },
//         },
//       },
//     },
//     'a.b.c.d',
//   ),
// );
// // test
//
// shouldcompnent

// const [first, ]

/**
 * parent component => URL
 *
 */
// React.memo(<componet />)

// A react component which renders a circle that changes color
// each second from red -> green -> blue -> red and so on.

// Two circles with each changing colors at intervals of 1s, 2s
// but the colors should never be same for all.

// Interval(s) - 0 1 2 3 4 5 6 7 8 9 10 11

// Circle1 (1s)- R B R G B G R G B G R G

// Circle2 (2s)- G G B B R R B B R R B B

// no global state, no useReducer, can use <Parent /> <Child />

/*

analyizing

1. language understanding (what is verb, noun)
2. typos
3. spartial query (all the suggestions)


sanitization


1. tokenizer
2. token filters

`
*/
