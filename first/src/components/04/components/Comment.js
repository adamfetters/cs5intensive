import React from 'react';

const Comment = props => {
  return (
    <div>
      <li>
        {props.username}
        {props.text}
      </li>
    </div>
  );
};

export default Comment;
