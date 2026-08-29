import { connect } from 'react-redux';
import { Typography } from 'antd';
import MenuComponent from '../helpers/Menu';
import Brand from './List';

const { Text } = Typography;

interface DashboardProps {
  total_loyalty_points?: number;
}

const Dashboard = ({ total_loyalty_points = 0 }: DashboardProps) => (
  <>
    <MenuComponent
      componentNavbar={(
        <>
          Total Points Remaining:&nbsp;
          <Text strong>{total_loyalty_points}</Text>
        </>
      )}
      componentContent={key => (
        <>
          {key === 'admin' && <Brand />}
        </>
      )}
    />
  </>
);

const mapStateToProps = (state: any) => {
  const { currentUser } = state.qiibee;
  const { total_loyalty_points } = currentUser || {};
  return { total_loyalty_points };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
