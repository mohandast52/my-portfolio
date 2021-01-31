/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ImOmega } from 'react-icons/im';
import { StepZero, StepOne, StepTwo } from './Helper';
import { CardContainer, CardHeader, CardFooter } from '../styles';

const Card = ({ step, handleClick }) => (
  <CardContainer>
    <CardHeader>
      <ImOmega />
      <h2>Lululemon</h2>
    </CardHeader>

    {step === 0 && <StepZero handleClick={handleClick} />}
    {step === 1 && <StepOne handleClick={handleClick} />}
    {step === 2 && <StepTwo handleClick={handleClick} />}

    <CardFooter>
      <span>Powered By</span>
      <span>Plaza</span>
    </CardFooter>
  </CardContainer>
);

export default Card;
