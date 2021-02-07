import React from 'react';
import Card from './Card';
import { Container } from './styles';

const MENU_LIST = ['Save', 'Edit', 'Preview'];

const CARD_LIST = [
  /*
  {
    id: 'random-uuid-1',
    source: '' ,
    source_type: 'img' ,
    heading: 'Countdown Announcement - Unlimited',
    subheading: 'Last edited 2 days ago',
    description: '',
    is_favourite: false,
    is_menu_required: true,
  },
  */
  {
    id: 'random-uuid-2',
    source: null,
    heading: 'Important announcement',
    subheading: 'Last edited 2 days ago',
    description:
      'A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content.',
    is_favourite: true,
    is_menu_required: true,
  },
  {
    id: 'random-uuid-3',
    source: null,
    heading: 'Important announcement',
    subheading: 'Last edited 4 days ago',
    is_favourite: null,
    is_menu_required: true,
  },
  {
    id: 'random-uuid-4',
    source: null,
    heading: 'Important announcement',
    subheading: 'Last edited 4 days ago',
    is_favourite: null,
    is_menu_required: false,
  },
];

const App = () => (
  <Container>
    {CARD_LIST.map(
      ({
        id,
        source,
        source_type: sourceType,
        heading,
        subheading,
        description,
        is_favourite: isFavourite,
        is_menu_required: isMenuRequired,
      }) => {
        console.log('object');

        return (
          <div className="just-for-spacing">
            <Card
              key={id}
              source={source}
              sourceType={sourceType}
              heading={heading}
              subheading={subheading}
              description={description}
              isFavourite={isFavourite}
              isMenuRequired={isMenuRequired}
              menuList={MENU_LIST}
            />
          </div>
        );
      },
    )}
  </Container>
);

export default App;
