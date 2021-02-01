/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { ImOmega } from 'react-icons/im';
import { StepZero, StepOne, StepTwo } from './Helper';
import { CardContainer, CardHeader, CardFooter } from '../styles';

const LIST = [
  'test1@gmail.com',
  'abc@gmail.com',
  'tttttt@gmail.com',
  'tiger@gmail.com',
  'tea@gmail.com',
  'test110@gmail.com',
  'test2@gmail.com',
  'test3@gmail.com',
  'test400@gmail.com',
  'test405@gmail.com',
  'test500@gmail.com',
  'test501@gmail.com',
  'test502@gmail.com',
  'test503@gmail.com',
];

const debounce = (fn, delay = 2000) => {
  let timeoutID;
  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => fn(...args), delay);
  };
};

const Card = ({ step, handleClick }) => {
  const [email, setEmail] = useState('');
  const [emails, setemails] = useState(LIST);

  const debouncedFn = debounce(() => {
    const c = LIST.filter(e => e.includes(email));
    console.log(c);
    return c;
  });

  const onEmailSearch = value => {
    setEmail(value);
    console.log(debouncedFn());
    // setemails(filteredEmails(value));
  };

  return (
    <CardContainer>
      <CardHeader>
        <ImOmega />
        <h2>Lululemon</h2>
      </CardHeader>

      {step === 0 && (
        <StepZero
          email={email}
          emails={email ? emails : []}
          handleClick={handleClick}
          onEmailSearch={onEmailSearch}
        />
      )}

      {step === 1 && <StepOne handleClick={handleClick} />}

      {step === 2 && <StepTwo handleClick={handleClick} />}

      <CardFooter>
        <span>Powered By</span>
        <span>Plaza</span>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
