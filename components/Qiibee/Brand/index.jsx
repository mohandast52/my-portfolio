/* eslint-disable camelcase */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import MenuComponent from '../helpers/Menu';
import Brand from './List';

const { Text } = Typography;

const Dashboard = ({ total_loyalty_points }) => (
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

Dashboard.propTypes = {
  total_loyalty_points: PropTypes.number,
};

Dashboard.defaultProps = {
  total_loyalty_points: 0,
};

const mapStateToProps = state => {
  const { currentUser } = state.qiibee;
  const { total_loyalty_points } = currentUser || {};
  return { total_loyalty_points };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
