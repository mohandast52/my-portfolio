import { useState } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Button } from 'antd';
import {
  BarChartOutlined,
  DashboardOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Brands from './Brands';
import Overview from './Overview';
import { Container, NavFooter } from './styles';

const {
  Header, Content, Footer, Sider,
} = Layout;

const Dashboard = () => {
  const [isCollapsed, setCollapse] = useState(false);
  const [activeKey, setActiveKey] = useState(['dashboard']);
  const key = activeKey ? activeKey[0] : null;

  const onCollapse = event => {
    setCollapse(event);
  };

  const onMenuClick = ({ keyPath }) => {
    setActiveKey(keyPath);
  };

  return (
    <Container>
      <Layout>
        <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse} theme="light">
          <div className="logo" />
          <Menu theme="light" mode="inline" selectedKeys={activeKey} onClick={onMenuClick}>
            <Menu.Item key="dashboard" icon={<BarChartOutlined />}>
              Set up Dashboard
            </Menu.Item>
            <Menu.Item key="overview" icon={<DashboardOutlined />}>
              Overview
            </Menu.Item>
            <Menu.Item key="token" icon={<DashboardOutlined />} disabled>
              Loyalty Token
            </Menu.Item>
            <Menu.Item key="admin" icon={<SettingOutlined />} disabled>
              Admin
            </Menu.Item>
            <Menu.Item key="help-center" icon={<QuestionCircleOutlined />}>
              Help Center
            </Menu.Item>
          </Menu>

          <NavFooter>
            <Button type="primary" ghost size="small" icon={<UserOutlined />}>
              {!isCollapsed && 'Profile'}
            </Button>
            <Button type="danger" ghost size="small" icon={<LogoutOutlined />}>
              {!isCollapsed && 'Logout'}
            </Button>
          </NavFooter>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" />

          <Content>
            <div>
              {key === 'dashboard' && <Brands />}
              {key === 'overview' && <Overview />}
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>Dashboard 2021 Created by `Mohan Das`</Footer>
        </Layout>
      </Layout>
    </Container>
  );
};

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
