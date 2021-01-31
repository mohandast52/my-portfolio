/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ImOmega } from 'react-icons/im';

import {
  CardContainer,
  CardHeader,
  CardFooter,
  WelcomeMessage,
  Form,
  Label,
  RedButton,
  Input,
  ScheduleContainer,
} from './styles';

const Card = ({ email, name }) => {
  console.log({});

  return (
    <CardContainer>
      <CardHeader>
        <ImOmega />
        <h2>Lululemon</h2>
      </CardHeader>

      <WelcomeMessage>Welcome to Lululemon Vitrual Shopping</WelcomeMessage>

      <Form className="form">
        <div>
          <Label htmlFor="email">EMAIL</Label>
          <Input id="email" />
        </div>

        <div>
          <Label htmlFor="password">
            MEETING PASSWORD
            <span className="info">(Shared Over Email)</span>
          </Label>
          <Input id="password" />
        </div>

        <RedButton type="button">Join Meeting</RedButton>
      </Form>

      <ScheduleContainer>
        <div className="question">Don&apos;t have an appointment?</div>
        <a href="#">Click Here to Schedule</a>
      </ScheduleContainer>

      <CardFooter>
        <span>Powered By</span>
        <span>Plaza</span>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
