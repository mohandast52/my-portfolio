import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from './Login/SignIn';

export const Qiibee = props => {
  console.log(props);
  return (
    <>
      <Login />
    </>
  );
};

Qiibee.propTypes = {
  // props: PropTypes
};

const mapStateToProps = state => {
  const { value } = state.qiibee;
  return {
    value,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Qiibee);
