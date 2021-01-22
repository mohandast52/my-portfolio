import React from 'react';
// import LeftProjectDetails from './ProjectDetails';
// import ClientMessages from './ClientMessages';
import LeftNavBar from './Layout/LeftNavBar';
import { GlobalStyle, DashboardContainer, Row } from './styles';

const Dashboard = () => (
  <>
    <DashboardContainer>
      <Row>
        <LeftNavBar />
      </Row>

      <Row>
        {/* <LeftProjectDetails /> */}
        {/* <ClientMessages /> */}
      </Row>
    </DashboardContainer>
    <GlobalStyle />
  </>
);

export default Dashboard;
