import React, { Component } from 'react';
import Tweeter from './03components/Tweeter/Tweeter';
import './03components/Tweeter/index.css';

export default class ComponentName extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="tweet">
        <Tweeter />
      </div>
    );
  }
}
