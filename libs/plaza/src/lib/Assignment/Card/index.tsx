import React, { useState, useMemo } from 'react';
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

interface CardProps {
  step: number;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const debounce = <Args extends unknown[]>(
  fn: (...args: Args) => void,
  delay = 500,
) => {
  let timeoutID: ReturnType<typeof setTimeout> | undefined;
  return (...args: Args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => fn(...args), delay);
  };
};

const Card = ({ step, handleClick }: CardProps) => {
  const [email, setEmail] = useState('');
  const [emails, setemails] = useState<string[]>(LIST);

  /* returns same function on every re-render! */
  const debounceLoadData = useMemo(
    () => debounce((emailTyped: string) => {
      const emailList = LIST.filter(e => e.includes(emailTyped));
      setemails(emailList);
    }),
    [],
  );

  const onEmailSearch = (value: string) => {
    setEmail(value);
    debounceLoadData(value);
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
