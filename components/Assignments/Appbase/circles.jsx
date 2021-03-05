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
export const ApproachOne = () => {
  const [counter, setCounter] = useState(0);
  const [lockOne, setLockOne] = useState(0);
  const [lockTwo, setLockTwo] = useState(1);

  useEffect(() => {
    const timerOne = setInterval(() => setCounter(prev => prev + 1), 1000);
    return () => clearTimeout(timerOne);
  }, []);

  useEffect(() => {
    /* in case of ODD => update only 1st circle */
    if (counter % 2 === 1) {
      setLockOne(prev => {
        const newLockOne = getNumber(prev, lockTwo);
        return newLockOne;
      });
    }

    /* in case of EVEN => update both circles */
    if (counter && counter % 2 === 0) {
      setLockTwo(prev => {
        const newLockTwo = (prev + 1) % 3;
        setLockOne(prev);
        return newLockTwo;
      });
    }
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
