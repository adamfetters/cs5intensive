import React from 'react';
import Header from './Header';
import Context from './Context';
import Url from './Url';

import './text-area.css';

const TextArea = () => {
  return (
    <div className="text-area">
      <Header />
      <Context />
      <Url />
    </div>
  );
};

export default TextArea;
