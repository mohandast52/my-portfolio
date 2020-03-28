import React, { Component } from 'react';
// import PropTypes from 'prop-types'

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Hey',
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <div>{value}</div>
      </div>
    );
  }
}

// Portfolio.propTypes = {
//   prop: PropTypes
// }
