/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import {
  WelcomeMessage,
  Form,
  Label,
  RedButton,
  TransparentButton,
  Input,
  ScheduleContainer,
  StepOneContainer,
} from '../styles';

/* ------------------- Step Zero------------------ */
export const StepZero = ({
  email, emails, handleClick, onEmailSearch,
}) => (
  <>
    <WelcomeMessage>Welcome to Lululemon Vitrual Shopping</WelcomeMessage>

    <Form className="form">
      <div className="email-input-row">
        <Label htmlFor="email">EMAIL</Label>
        <Input
          id="email"
          value={email}
          placeholder="Type 'test' for autocomplete"
          onChange={({ target }) => onEmailSearch(target.value)}
          autoComplete="off"
        />

        {emails.length !== 0 && (
          <div className="autocomplete-container">
            {emails.map(e => (
              <div>{e}</div>
            ))}
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="password">
          MEETING PASSWORD
          <span className="info">(Shared Over Email)</span>
        </Label>
        <Input id="password" />
      </div>

      <RedButton type="button" onClick={handleClick}>
        Join Meeting
      </RedButton>
    </Form>

    <ScheduleContainer>
      <div className="question">Don&apos;t have an appointment?</div>
      <a href="#">Click Here to Schedule</a>
    </ScheduleContainer>
  </>
);

/* ------------------- Details------------------ */

export const Details = () => {
  const infoList = [
    {
      key: 'name',
      title: 'Name',
      value: 'Jane Doe',
    },
    {
      key: 'email',
      title: 'Email',
      value: 'janedoe@gmail.com',
    },
    {
      key: 'shopping-session',
      title: 'Personal Shopping Session with',
      value: 'Kathleen B',
    },
    {
      key: 'day',
      title: 'Day',
      value: 'Tuesday',
    },
    {
      key: 'date',
      title: 'Date',
      value: '10/23/20',
    },
    {
      key: 'time',
      title: 'Time',
      value: '2:30 pm EST',
    },
  ];

  return (
    <div className="info-table">
      {infoList.map(eachInfo => {
        const { key, title, value } = eachInfo;

        return (
          <div className={`row ${key === 'email' ? ' email' : ''}`} key={key}>
            <div className="row-title">
              {title}
              :
            </div>
            <div className="row-value">{value}</div>
          </div>
        );
      })}
    </div>
  );
};

/* ------------------- Step One------------------ */
export const StepOne = ({ handleClick }) => (
  <StepOneContainer>
    <div className="message">Please Check Your Details Below</div>

    <Details />

    <RedButton type="button" onClick={handleClick}>
      Join Meeting
    </RedButton>

    <ScheduleContainer>
      <div className="question">Change in Plans?</div>
      <a href="#">Click Here to Reschedule</a>
    </ScheduleContainer>
  </StepOneContainer>
);

/* ------------------- Step Two ------------------ */
export const StepTwo = ({ handleClick }) => (
  <StepOneContainer>
    <div className="message">Your Appointment is Confirmed</div>

    <Details />

    <>
      <TransparentButton type="button" onClick={handleClick}>
        Reschedule Meeting
      </TransparentButton>

      <TransparentButton type="button" onClick={handleClick}>
        Cancel Meeting
      </TransparentButton>
    </>
  </StepOneContainer>
);
