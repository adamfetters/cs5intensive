import React from 'react';

import './comment.css';

const CommentList = props => {
  return (
    <div className="comment-container">
      <li className="comment">
        <div className="username">
          <b> {props.username}</b>
        </div>
        {props.text}
      </li>
    </div>
  );
};

export default CommentList;
