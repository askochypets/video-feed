import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Feed from '../interfaces/feed';
import '../styles/feed.css';

export default class FeedComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }

  abbreviateNumber(value: number): string {
    let newValue = value;
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }
    return newValue.toPrecision(2) + suffixes[suffixNum];
  }

  buildUrl(item: Feed) {
    let url: string;
    switch (item.source) {
      case 'youtube':
        url = item.videoId ? `https://www.youtube.com/embed/${item.videoId}` : '';
        break;
      case 'facebook':
        url = item.videoId ? `https://www.facebook.com/facebook/videos/${item.videoId}` : '';
        break;
      case 'url':
        url = item.url || '';
        break;
      default:
        url = '';
    }
    return url;
  }

  render() {
    const errorBlock = <div className='feed-layout error'>Data is missing</div>;
    const feedBlock = (
      <div className='feed-layout'>
        <div className='title'>
          <div>{this.state.item.title}</div>
          <div>{this.abbreviateNumber(this.state.item.views)} views</div>
        </div>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={this.buildUrl(this.state.item)}
            controls={true}
            width='100%'
            height='100%'
          />
        </div>
      </div>
    );

    return this.buildUrl(this.state.item) ? feedBlock : errorBlock;
  }
}
