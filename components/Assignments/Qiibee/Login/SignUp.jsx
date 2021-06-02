/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Form, Input, Button, Typography,
} from 'antd';
import Link from 'next/link';
import { Container, Header } from './styles';

const { Title, Paragraph } = Typography;

const SignUp = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  return (
    <Container>
      <Header>
        <Title level={2}>Welcome to Dashboard</Title>
        <Paragraph>Let&apos;s set up your account quickly!</Paragraph>
      </Header>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[{ required: true, message: 'Please input your First Name!' }]}
        >
          <Input placeholder="Enter your first name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[{ required: true, message: 'Please input your Last Name!' }]}
        >
          <Input placeholder="Enter your last name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="username"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            type="password"
            placeholder="Enter your password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign Up
          </Button>
        </Form.Item>
      </Form>

      <p className="footer">
        Already have an account?&nbsp;
        <Link href="/qiibee/login">
          <a>Login</a>
        </Link>
      </p>
    </Container>
  );
};

export default SignUp;
