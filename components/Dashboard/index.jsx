import React from 'react';
// import LeftProjectDetails from './LeftProjectDetails';
import ClientMessages from './ClientMessages';
import { GlobalStyle, DashboardContainer } from './styles';

const Dashboard = () => (
  <>
    <DashboardContainer>
      {/* <LeftProjectDetails /> */}
      <ClientMessages />
    </DashboardContainer>
    <GlobalStyle />
  </>
);

export default Dashboard;
