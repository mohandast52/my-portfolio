/* eslint-disable camelcase */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Typography,
} from 'antd';
import MenuComponent from '../helpers/Menu';
import Customer from './List';
import Overview from './Overview';

const { Text } = Typography;

const Dashboard = ({ reedeemed_points }) => (
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

Dashboard.propTypes = {
  reedeemed_points: PropTypes.number,
};

Dashboard.defaultProps = {
  reedeemed_points: 0,
};

const mapStateToProps = state => {
  const { currentUser } = state.qiibee;
  const { reedeemed_points } = currentUser || {};
  return { reedeemed_points };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
