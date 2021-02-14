import React from 'react';
import Card from './Card';
import { Container } from './styles';

const CARD_LIST = [
  {
    id: 'random-uuid-1',
    source: '/images/empty_image.png',
    source_type: 'img',
    heading: 'Countdown Announcement - Unlimited',
    subheading: 'Last edited 2 days ago',
    description: null,
    is_favourite: false,
    is_menu_required: true,
  },
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
  {
    id: 'random-uuid-5',
    source: [
      {
        link:
          'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
        type: 'video/webm',
      },
      {
        link:
          'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        type: 'video/mp4',
      },
    ],
    source_type: 'video',
    heading: 'Countdown Announcement - Unlimited',
    subheading: 'Last edited 2 days ago',
    description: null,
    is_favourite: false,
    is_menu_required: true,
  },
];

const Cogsy = () => (
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
      }) => (
        <div className="just-for-spacing" key={id}>
          <Card
            source={source}
            sourceType={sourceType}
            heading={heading}
            subheading={subheading}
            description={description}
            isFavourite={isFavourite}
            isMenuRequired={isMenuRequired}
          />
        </div>
      ),
    )}
  </Container>
);

export default Cogsy;
