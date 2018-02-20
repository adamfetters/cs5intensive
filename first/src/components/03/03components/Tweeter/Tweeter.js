import React, { Component } from 'react';
import Logo from './Logo/Logo';
import Title from './Title/Title';
import TextArea from './TextArea/TextArea';
import Buttons from './Navigation/Buttons/Buttons';

import './tweeter.css';

class Tweeter extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="header">
            <Logo />
            <Title />
          </div>
          <div className="main-area">
            <TextArea />
          </div>
          <div className="buttons">
            <Buttons />
          </div>
        </div>
      </div>
    );
  }
}

export default Tweeter;
