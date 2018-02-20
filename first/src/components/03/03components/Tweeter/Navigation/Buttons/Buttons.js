import React from 'react';
import Response from './Response';
import ReTweet from './ReTweet';
import Love from './Love';
import Share from './Share';

import './button-container.css';

const Buttons = () => {
  return (
    <div className="button-container">
      <div className="button">
        <Response />
      </div>
      <div className="button">
        {' '}
        <ReTweet />
      </div>
      <div className="button">
        <Love />
      </div>
      <div className="button">
        <Share />
      </div>
    </div>
  );
};

export default Buttons;
