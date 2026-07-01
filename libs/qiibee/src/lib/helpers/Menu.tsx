import { ReactNode, useState } from 'react';
import { connect } from 'react-redux';
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
} from '../state/actions';
import { Container, NavFooter } from './styles';

const {
  Header, Content, Footer, Sider,
} = Layout;

interface DashboardProps {
  currentUserType?: string | null;
  handleLogout: () => void;
  componentNavbar?: ReactNode;
  componentContent?: (key: string | null) => ReactNode;
}

const Dashboard = ({
  currentUserType = null, handleLogout, componentNavbar = null, componentContent = () => null,
}: DashboardProps) => {
  const [isCollapsed, setCollapse] = useState(false);
  const [activeKey, setActiveKey] = useState([currentUserType === 'brand' ? 'admin' : 'dashboard']);
  const router = useRouter();
  const key = activeKey ? activeKey[0] : null;

  const onCollapse = (event: boolean) => {
    setCollapse(event);
  };

  const onMenuClick = ({ keyPath }: { keyPath: string[] }) => {
    setActiveKey(keyPath);
  };

  const logout = () => {
    handleLogout();
    router.push('/qiibee/login');
  };

  /* antd 6 removed the <Menu.Item> children API in favour of the items prop. */
  const menuItems = currentUserType === 'brand'
    ? [{ key: 'admin', icon: <SettingOutlined />, label: 'Admin' }]
    : [
      { key: 'dashboard', icon: <BarChartOutlined />, label: 'Dashboard' },
      { key: 'overview', icon: <DashboardOutlined />, label: 'Overview' },
      {
        key: 'help-center', icon: <QuestionCircleOutlined />, label: 'Help Center', disabled: true,
      },
    ];

  return (
    <Container>
      <Layout>
        <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse} theme="light">
          <div className="logo" />
          <Menu
            theme="light"
            mode="inline"
            selectedKeys={activeKey}
            onClick={onMenuClick}
            items={menuItems}
          />

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
            <Button danger ghost size="small" icon={<LogoutOutlined />} onClick={logout}>
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

const mapStateToProps = (state: any) => {
  const { currentUserType } = state.qiibee;
  return { currentUserType };
};

const mapDispatchToProps = {
  handleLogout: handleLogoutFn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
