import React, { Component } from 'react';

class Second extends Component {
  render() {
    return (
      <div>
        <p>Hello, {this.props.blanket}</p>
      </div>
    );
  }
}

export default Second;
