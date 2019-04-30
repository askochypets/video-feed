import React from 'react';
import './Feed.css';

export default class Feed extends React.Component {
  render() {
    return (
      <div className='feed-layout'>
        <div className='title'>
          <div>title</div>
          <div>123</div>
        </div>
        <div>
          <iframe
            width='100%'
            height='500px'
            frameBorder='0'
            src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1'
          />
        </div>
      </div>
    );
  }
}
