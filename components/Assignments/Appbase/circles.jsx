/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { ProblemContainer, Container, Title } from './styles';

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
  <div className="circle" style={{ backgroundColor: colorName }}>
    <span>{colorName}</span>
  </div>
);

/* ---------------- ONE ---------------- */
const ApproachOne = () => {
  const [counter, setCounter] = useState(0);
  const [lockOne, setColorOne] = useState(0);
  const [lockTwo, setColorTwo] = useState(1);

  useEffect(() => {
    const timerOne = setInterval(() => setCounter(prev => prev + 1), 1000);
    return () => clearTimeout(timerOne);
  }, []);

  useEffect(() => {
    setColorOne(prev => {
      const newLockOne = getNumber(prev, lockTwo);

      /* if counter is off even number, then change color for 2nd circle */
      if (counter % 2 === 0) {
        const newLockTwo = getNumber(lockTwo, newLockOne);
        setColorTwo(newLockTwo);
      }

      return newLockOne;
    });
  }, [counter]);

  return (
    <>
      <Title>Approach 1</Title>
      <Container>
        <Circle colorName={COLORS[lockOne]} />
        <Circle colorName={COLORS[lockTwo]} />
      </Container>
    </>
  );
};


const Problem = () => (
  <ProblemContainer>
    <ApproachOne />
  </ProblemContainer>
);

export default Problem;
