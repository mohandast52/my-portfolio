/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import {
  Form, Input, Button, Checkbox, Typography, Alert,
} from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Container, Header } from './styles';

const { Title, Paragraph } = Typography;

const Login = ({ customers }) => {
  const [hasError, setError] = useState(false);
  const router = useRouter();

  const onFinish = values => {
    const isPresent = (customers || []).some(user => {
      const { username, password } = user;
      return values.username === username && values.password === password;
    });

    if (isPresent) {
      router.push('/qiibee/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <Header>
        <Title level={2}>Welcome back</Title>
        <Paragraph>Please login to your account!</Paragraph>
      </Header>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>

      <p className="footer">
        Don&apos;t have an account?&nbsp;
        <Link href="/qiibee/signup">
          <a>Sign Up</a>
        </Link>
      </p>

      {hasError && (
        <Alert message="Username or password is incorrect!" type="error" showIcon />
      )}
    </Container>
  );
};


Login.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.object),
};

Login.defaultProps = {
  customers: [],
};

const mapStateToProps = state => {
  const { customers } = state.qiibee;
  return { customers };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
