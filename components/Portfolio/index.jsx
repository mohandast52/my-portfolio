import React, { Component } from 'react';
import { UseEventListenerInPage } from './useHookLearning';
// import PropTypes from 'prop-types'

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Working on it! HDFC',
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <div>{value}</div>
        <UseEventListenerInPage />
      </div>
    );
  }
}

// Portfolio.propTypes = {
//   prop: PropTypes
// }
