import React from 'react';
import { FaSearch, FaStar, FaRegStar } from 'react-icons/fa';
import {
  MessagesContainer,
  Messages,
  EachMessage,
  Avatar,
  Content,
  Starred,
  InspiredBy,
} from './styles';
import { SectionTitle, HyperLink } from '../styles';

const MESSAGES = [
  {
    id: 'message-101',
    sender: 'David',
    date: '21 July',
    isStarred: false,
    imageName: 'boy_1',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque esse.',
  },
  {
    id: 'message-102',
    sender: 'Stephanie',
    date: '19 July',
    isStarred: true,
    imageName: 'girl_1',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    id: 'message-103',
    sender: 'Alone',
    date: '19 July',
    isStarred: true,
    imageName: 'girl_2',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit!',
  },
  {
    id: 'message-104',
    sender: 'William',
    date: '17 July',
    isStarred: false,
    imageName: 'boy_2',
    text:
      'Cumque esse odit optio quae est ut facere voluptate accusantium aliquid dignissimos.',
  },
  /*
  {
    id: 'message-105',
    sender: 'William',
    date: '17 July',
    isStarred: false,
    imageName: 'boy_2',
    text:
      'Cumque esse odit optio quae est ut facere voluptate accusantium aliquid dignissimos.',
  },
  {
    id: 'message-106',
    sender: 'William',
    date: '17 July',
    isStarred: false,
    imageName: 'boy_2',
    text:
      'Cumque esse odit optio quae est ut facere voluptate accusantium aliquid dignissimos.',
  },
  */
];

const ClientMessages = () => (
  <MessagesContainer>
    <SectionTitle>
      <span>Client Messages</span>
      <span>
        <FaSearch />
      </span>
    </SectionTitle>

    <Messages>
      {MESSAGES.map(({
        id, sender, date, isStarred, imageName, text,
      }) => (
        <EachMessage key={id}>
          <Avatar>
            <img src={`/images/${imageName}.jpg`} alt="" />
          </Avatar>

          <Content>
            <div className="header">
              <h4>{sender}</h4>

              <Starred>
                {isStarred ? (
                  <span className="active">
                    <FaStar />
                  </span>
                ) : (
                  <span>
                    <FaRegStar />
                  </span>
                )}
              </Starred>
            </div>

            <div className="info">{text}</div>

            <div className="date">{date}</div>
          </Content>
        </EachMessage>
      ))}
    </Messages>

    <InspiredBy>
      Inspired by&nbsp;
      <HyperLink
        href="https://dribbble.com/shots/14038313-Project-Management-Dashboard-UX-UI-Design"
        target="_blank"
        rel="noopener noreferrer"
        className="profile-name"
      >
        Hira
      </HyperLink>
    </InspiredBy>
  </MessagesContainer>
);

export default ClientMessages;
