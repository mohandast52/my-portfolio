import React from 'react';
import LeftNavBar from './Layout/LeftNavBar';
import TopNavBar from './Layout/TopNavBar';
import LeftProjectDetails from './ProjectDetails';
import ClientMessages from './ClientMessages';
import { GlobalStyle, DashboardContainer, Row } from './styles';

const Dashboard = () => (
  <>
    <DashboardContainer>
      <Row>
        <TopNavBar />
      </Row>

      <Row>
        <LeftNavBar />
        <LeftProjectDetails />
        <ClientMessages />
      </Row>
    </DashboardContainer>
    <GlobalStyle />
  </>
);

export default Dashboard;
