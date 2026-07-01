import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
// Some pseudo CSS

export const Selection = styled.div`
  margin: 2rem;

  /* https://developer.mozilla.org/en-US/docs/Web/CSS/::selection */
  .first::selection {
    color: red;
    background: yellow;
  }
  .second::selection {
    color: white;
    background-color: blue;
  }
`;

export const CaretColor = styled.div`
  caret-color: red;
`;

function Carousel() {
  return (
    <div style={{ margin: '3rem' }}>
      <Selection>
        <p className="first">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          facere perferendis inventore optio eum tempore a maxime doloribus
          commodi, nemo excepturi nisi? Deserunt reiciendis voluptates molestiae
          asperiores dicta eos cupiditate!
        </p>
        <p className="second">
          Optio placeat obcaecati beatae perspiciatis modi magni totam vero
          voluptatum aliquam commodi, ab sequi quas quod eum necessitatibus
          deserunt ex magnam velit incidunt unde saepe! Consequatur dolor minus
          omnis commodi, distinctio natus voluptas harum dolorum vero facilis
          voluptatum voluptate quibusdam.
        </p>
      </Selection>

      <hr />

      <CaretColor>
        <Input />
      </CaretColor>
    </div>
  );
}

export default Carousel;
