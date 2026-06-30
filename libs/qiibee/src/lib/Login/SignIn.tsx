import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import {
  Form, Input, Button, Checkbox, Typography, Alert, Radio,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  handleSignIn as handleSignInFn,
} from 'store/qiibee/actions';
import { Container, Header } from './styles';

const { Title, Paragraph } = Typography;

interface LoginProps {
  customers?: any[];
  brands?: any[];
  handleSignIn: (userType: any, currentUser: any) => void;
}

const Login = ({ customers = [], brands = [], handleSignIn }: LoginProps) => {
  const [hasError, setError] = useState(false);
  const router = useRouter();

  const onFinish = (values: any) => {
    const users = values.user_type === 'customer' ? customers : brands;
    const currentUser = (users || []).find((user: any) => {
      const { username, password } = user;
      return values.username === username && values.password === password;
    });

    if (currentUser) {
      handleSignIn(values.user_type, currentUser);
      router.push(`/qiibee/${values.user_type}-dashboard`);
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
        initialValues={{ remember: true, user_type: 'customer' }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item name="user_type" label="Type">
          <Radio.Group>
            <Radio value="customer">Customer</Radio>
            <Radio value="brand">Brand</Radio>
          </Radio.Group>
        </Form.Item>

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
        <Link href="/qiibee/signup">Sign Up</Link>
      </p>

      {hasError && (
        <Alert message="Username or password is incorrect!" type="error" showIcon />
      )}
    </Container>
  );
};


const mapStateToProps = (state: any) => {
  const { customers, brands } = state.qiibee;
  return { customers, brands };
};

const mapDispatchToProps = {
  handleSignIn: handleSignInFn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
