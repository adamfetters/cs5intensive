import React, { Component } from 'react';
import CommentList from './components/CommentList';

import './comment-list.css';

export default class ComponentName extends Component {
  constructor() {
    super();
    this.state = {
      comments: [
        {
          username: 'twitch',
          text: 'Epic Street Fighter action here in Las Vegas at #EVO2017!',
        },
        {
          username: 'michaelmarzetta',
          text: 'Omg that match was crazy',
        },
        {
          username: 'themexican_leprechaun',
          text: 'What a setup',
        },
        {
          username: 'dennis_futbol',
          text: 'It that injustice',
        },
        {
          username: 'dennis_futbol',
          text: 'Is',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <ul className="comment-list">
          {this.state.comments.map((comment, index) => (
            <CommentList key={index} username={comment.username} text={comment.text} />
          ))}
        </ul>
      </div>
    );
  }
}
