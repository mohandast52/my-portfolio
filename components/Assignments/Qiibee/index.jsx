import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  incrementCounter as incrementCounterFn,
  decrementCounter as decrementCounterFn,
} from 'store/qiibee/actions';

export const Qiibee = props => {
  console.log(props);
  const { incrementCounter } = props;
  return (
    <div>
      <div onClick={incrementCounter}>
        Mohan
      </div>
    </div>
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
  incrementCounter: incrementCounterFn,
  decrementCounter: decrementCounterFn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Qiibee);
