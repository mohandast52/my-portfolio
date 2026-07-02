import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// REFLECTION

export const ContainerOne = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  width: 100vw;
  height: 100vh;
  img {
    /* https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-box-reflect */
    -webkit-box-reflect: below 10px linear-gradient(transparent, white);
  }
`;

function Carousel() {
  return (
    <ContainerOne>
      <Image
        src="https://avatars.githubusercontent.com/u/22061815?v=4"
        width={300}
        height={300}
        alt="mohan"
        unoptimized
      />
    </ContainerOne>
  );
}

export default Carousel;
