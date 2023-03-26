/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 4rem auto;
  overflow-x: scroll;
  width: 320px;
  height: 500px;

  /* https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type */
  scroll-snap-type: x mandatory;

  .slide {
    /* https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align */
    scroll-snap-align: end;

    /* scroll-margin-left: 100px; // if we want to leave 100px in left-side */
  }

  img.slide {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

function Carousel() {
  return (
    <Container>
      <img
        className="slide"
        src="https://images.unsplash.com/photo-1559757849-1331b7beb222"
      />
      <img
        className="slide"
        src="https://images.unsplash.com/photo-1559757742-654d5da2eaab"
      />
      <img
        className="slide"
        src="https://images.unsplash.com/photo-1559757740-e85122cb7466"
      />
    </Container>
  );
}

export default Carousel;
