import React, { Component } from 'react';

class RenderComp extends Component {
  constructor() {
    super();
    this.state = {
      children: [{ name: 'one', age: 'two' }, { name: 'a', age: 'three' }],
    };
  }

  render() {
    return (
      <div>
        <RenderChildren children={this.state.children} />
      </div>
    );
  }
}

export default RenderComp;
