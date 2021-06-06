/* eslint-disable camelcase */
import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Layout, Menu, Button } from 'antd';
import {
  BarChartOutlined,
  DashboardOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {
  handleLogout as handleLogoutFn,
} from 'store/qiibee/actions';
import { Container, NavFooter } from './styles';

const {
  Header, Content, Footer, Sider,
} = Layout;

const Dashboard = ({
  currentUserType, handleLogout, componentNavbar, componentContent,
}) => {
  const [isCollapsed, setCollapse] = useState(false);
  const [activeKey, setActiveKey] = useState([currentUserType === 'brand' ? 'admin' : 'dashboard']);
  const router = useRouter();
  const key = activeKey ? activeKey[0] : null;

  const onCollapse = event => {
    setCollapse(event);
  };

  const onMenuClick = ({ keyPath }) => {
    setActiveKey(keyPath);
  };

  const logout = () => {
    handleLogout();
    router.push('/qiibee/login');
  };

  return (
    <Container>
      <Layout>
        <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse} theme="light">
          <div className="logo" />
          <Menu theme="light" mode="inline" selectedKeys={activeKey} onClick={onMenuClick}>
            {currentUserType === 'brand' ? (
              <>
                <Menu.Item key="admin" icon={<SettingOutlined />}>
                  Admin
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item key="dashboard" icon={<BarChartOutlined />}>
                  Dashboard
                </Menu.Item>
                <Menu.Item key="overview" icon={<DashboardOutlined />}>
                  Overview
                </Menu.Item>
                <Menu.Item key="help-center" icon={<QuestionCircleOutlined />} disabled>
                  Help Center
                </Menu.Item>
              </>
            )}
          </Menu>

          <NavFooter>
            <Button
              type="primary"
              ghost
              size="small"
              icon={<UserOutlined />}
              onClick={() => window.open('https://github.com/mohandast52', '_blank')}
            >
              {!isCollapsed && 'Profile'}
            </Button>
            <Button type="danger" ghost size="small" icon={<LogoutOutlined />} onClick={logout}>
              {!isCollapsed && 'Logout'}
            </Button>
          </NavFooter>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background">
            <div>
              {componentNavbar}
            </div>
          </Header>

          <Content>
            <div>
              {componentContent(key)}
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            Dashboard
            {' '}
            {new Date().getFullYear()}
            {' '}
            Created by `Mohan Das`
          </Footer>
        </Layout>
      </Layout>
    </Container>
  );
};

Dashboard.propTypes = {
  currentUserType: PropTypes.string,
  handleLogout: PropTypes.func.isRequired,
  componentNavbar: PropTypes.element,
  componentContent: PropTypes.func,

};

Dashboard.defaultProps = {
  currentUserType: null,
  componentNavbar: null,
  componentContent: () => {},
};

const mapStateToProps = state => {
  const { currentUserType } = state.qiibee;
  return { currentUserType };
};

const mapDispatchToProps = {
  handleLogout: handleLogoutFn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
