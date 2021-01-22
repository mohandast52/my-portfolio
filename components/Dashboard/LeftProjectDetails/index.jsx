import React from 'react';
import HeaderOne from './HeaderOne';
import HeaderTwo from './HeaderTwo';
import EachCard from '../EachCard';
import { COLOR } from '../Helpers';

import { Container, Body } from './styles';

const ProjectList = [
  {
    id: 'project-idea-1',
    date: 'July 2, 2020',
    title: 'Web Designing',
    info: 'Prototyping',
    percentage: 90,
    timeLeft: '3 days left',
    color: 'blue',
  },
  {
    id: 'project-idea-2',
    date: 'July 5, 2020',
    title: 'Mobile App',
    info: 'Shopping',
    percentage: 40,
    timeLeft: '3 weeks left',
    color: 'orange',
  },
  {
    id: 'project-idea-3',
    date: 'July 5, 2020',
    title: 'Dashboard',
    info: 'Medical',
    percentage: 50,
    timeLeft: '2 weeks left',
    color: 'green',
  },
  {
    id: 'project-idea-4',
    date: 'July 5, 2020',
    title: 'Web Designing',
    info: 'Wireframing',
    percentage: 20,
    timeLeft: '3 weeks left',
    color: 'pink',
  },
  {
    id: 'project-idea-5',
    date: 'July 5, 2020',
    title: 'Backend API',
    info: 'Shopping',
    percentage: 40,
    timeLeft: '5 weeks left',
    color: 'lavendar',
  },
  {
    id: 'project-idea-6',
    date: 'July 5, 2020',
    title: 'React Testing Library',
    info: 'Shopping',
    percentage: 10,
    timeLeft: '6 weeks left',
    color: 'yellow',
  },
];

const getColor = type => {
  if (type === 'blue') {
    return { bgColor: COLOR.LIGHT_BLUE, progressColor: COLOR.BLUE };
  }

  if (type === 'orange') {
    return { bgColor: COLOR.LIGHT_ORANGE, progressColor: COLOR.ORANGE };
  }

  if (type === 'green') {
    return { bgColor: COLOR.LIGHT_GREEN, progressColor: COLOR.GREEN };
  }

  if (type === 'pink') {
    return { bgColor: COLOR.LIGHT_PINK, progressColor: COLOR.PINK };
  }

  if (type === 'lavendar') {
    return { bgColor: COLOR.LIGHT_LAVENDAR, progressColor: COLOR.LAVENDAR };
  }

  if (type === 'yellow') {
    return { bgColor: COLOR.LIGHT_YELLOW, progressColor: COLOR.YELLOW };
  }

  return null;
};

const Dashboard = () => (
  <Container>
    <HeaderOne />
    <HeaderTwo />

    <Body>
      {ProjectList.map(
        ({
          id, date, title, info, percentage, timeLeft, color,
        }) => {
          const { bgColor, progressColor } = getColor(color) || {};

          return (
            <EachCard
              key={id}
              date={date}
              title={title}
              info={info}
              percentage={percentage}
              timeLeft={timeLeft}
              bgColor={bgColor}
              progressColor={progressColor}
            />
          );
        },
      )}
    </Body>
  </Container>
);

export default Dashboard;
