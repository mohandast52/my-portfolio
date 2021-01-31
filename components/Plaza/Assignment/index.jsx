import React, { useReducer } from 'react';
import Card from './Card';
import { Container } from './styles';

const reducer = () => {};

const Assignment = () => {
  const [state, dispatch] = useReducer(reducer, {
    step: '1',
    name: null,
    email: '',
  });

  return (
    <Container>
      <Card />
    </Container>
  );
};

export default Assignment;
