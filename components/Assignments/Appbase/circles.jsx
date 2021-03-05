/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container } from './styles';

/* ---------------- HELPERS---------------- */
const COLORS = ['red', 'blue', 'green'];
const getNumber = (i, j) => {
  if (i === 0 && j === 1) return 2;
  if (i === 0 && j === 2) return 1;
  if (i === 1 && j === 0) return 2;
  if (i === 1 && j === 2) return 0;
  if (i === 2 && j === 0) return 1;
  if (i === 2 && j === 1) return 0;
  return -1;
};

/* ---------------- Circle Component---------------- */
const Circle = ({ colorName }) => (
  <div
    className="circle"
    style={{ backgroundColor: colorName, borderColor: colorName }}
  >
    <span>{colorName}</span>
  </div>
);

/* ---------------- MAIN Component---------------- */
const Component = () => {
  const [counter, setCounter] = useState(0);
  const [circleOneColor, setColorOne] = useState(0);
  const [circleTwoColor, setColorTwo] = useState(1);

  /*
  useEffect(() => {
    const timerOne = setInterval(() => {
      getColorOne(prevNum => {
        const num = (prevNum + 1) % 3;
        // console.log(num);
        return num;
      });
    }, 1000);

    return () => {
      clearTimeout(timerOne);
    };
  }, []);
  */

  useEffect(() => {
    setColorOne(prev => {
      // const num = prev + 1;
      // if (num % 2 === 0) {
      //   setColorTwo(circleTwoColor + 1);
      //   console.log(num, circleTwoColor + 1);
      // }
      // return num;
      const newLockOne = getNumber(prev, circleTwoColor);
      if (counter % 2 === 0) {
        const lockTwo = getNumber(circleTwoColor, newLockOne);
        setColorTwo(lockTwo);
      }

      return newLockOne;
    });
  }, [counter]);


  const btnClick = () => {
    setCounter(prev => prev + 1);
  };

  // console.log(circleOneColor);
  return (
    <Container>
      <Circle colorName={COLORS[circleOneColor]} />
      <Circle colorName={COLORS[circleTwoColor]} />
      <button onClick={btnClick} type="button">Click</button>
    </Container>
  );
};

export default Component;
