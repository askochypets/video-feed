import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Feed.css';

export default class Feed extends Component<any, any> {
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

  render() {
    return (
      <div className='feed-layout'>
        <div className='title'>
          <div>{this.state.item.title}</div>
          <div>{this.abbreviateNumber(this.state.item.views)} views</div>
        </div>
        <div>
          <ReactPlayer width='100%' height='500px' url={this.state.item.url} />
        </div>
      </div>
    );
  }
}
