import React from 'react';
import { Header, Footer } from './helper';
import type { CardSource, CardSourceType } from './helper';
import {
  CardContainer,
  Body,
  SubHeading,
  Description,
  Heading,
} from './styles';

export interface CardProps {
  source?: CardSource;
  sourceType?: CardSourceType;
  heading: string;
  subheading: string;
  description?: string | null;
  isFavourite?: boolean | null;
  isMenuRequired?: boolean;
}

/**
 * Card Component can handle all the possible cases mentioned in assignment
 */

const Card = ({
  source = null /* if null ? don't show thumbnail */,
  sourceType = null,
  heading,
  subheading,
  description = null,
  isFavourite = null /* if null ? don't show icon */,
  isMenuRequired = false /* if false ? don't show menu */,
}: CardProps) => (
  <CardContainer>
    <Header source={source} sourceType={sourceType} />

    <Body>
      <Heading className="f-l">{heading}</Heading>
      <SubHeading className="f-s">{subheading}</SubHeading>
      {description && <Description className="f-s">{description}</Description>}
    </Body>

    <Footer isFavourite={isFavourite} isMenuRequired={isMenuRequired} />
  </CardContainer>
);

export default Card;
