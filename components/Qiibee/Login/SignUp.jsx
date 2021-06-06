/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Form, Input, Button, Typography, Radio, InputNumber,
} from 'antd';
import {
  handleSignUp as handleSignUpFn,
} from 'store/qiibee/actions';
import { Container, Header } from './styles';

const { Title, Paragraph } = Typography;

const SignUp = ({ handleSignUp }) => {
  const [whichType, setType] = useState('customer');
  const router = useRouter();

  const onFinish = values => {
    handleSignUp(values);
    router.push(`/qiibee/${values.user_type}-dashboard`);
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
        initialValues={{ remember: true, user_type: 'customer' }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item name="user_type" label="Type">
          <Radio.Group onChange={e => setType(e.target.value)}>
            <Radio value="customer">Customer</Radio>
            <Radio value="brand">Brand</Radio>
          </Radio.Group>
        </Form.Item>

        {whichType === 'customer' ? (
          <>
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
          </>
        ) : (
          <>
            <Form.Item
              label="Brand Name"
              name="title"
              rules={[{ required: true, message: 'Please input your brand Name!' }]}
            >
              <Input placeholder="Enter your brand name" />
            </Form.Item>

            <Form.Item
              label="Max Loyalty Points"
              name="total_loyalty_points"
              rules={[{ required: true, message: 'Please input your Last Name!' }]}
            >
              <InputNumber placeholder="Enter your last name" />
            </Form.Item>

            <Form.Item
              label="Logo URL"
              name="icon"
              rules={[{ required: false }]}
            >
              <Input placeholder="Enter your logo URL" />
            </Form.Item>
          </>
        )}

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

SignUp.propTypes = {
  handleSignUp: PropTypes.func,
};

SignUp.defaultProps = {
  handleSignUp: () => { },
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  handleSignUp: handleSignUpFn,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
