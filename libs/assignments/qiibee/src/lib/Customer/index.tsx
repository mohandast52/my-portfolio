import { connect } from 'react-redux';
import { Typography } from 'antd';
import MenuComponent from '../helpers/Menu';
import Customer from './List';
import Overview from './Overview';

const { Text } = Typography;

interface DashboardProps {
  reedeemed_points?: number;
}

const Dashboard = ({ reedeemed_points = 0 }: DashboardProps) => (
  <>
    <MenuComponent
      componentNavbar={(
        <>
          Reedeemed Points:&nbsp;
          <Text strong>{reedeemed_points}</Text>
        </>
      )}
      componentContent={key => (
        <>
          {key === 'dashboard' && <Customer />}
          {key === 'overview' && <Overview />}
        </>
      )}
    />
  </>
);

const mapStateToProps = (state: any) => {
  const { currentUser } = state.qiibee;
  const { reedeemed_points } = currentUser || {};
  return { reedeemed_points };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
