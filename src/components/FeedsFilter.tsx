import React, { Component } from 'react';
import FeedsAPI from '../services/FeedsAPI';
import '../styles/feedsFilter.css';

export default class FeedsFilterComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      selected: '',
    };
  }
  async filter(source: string) {
    let params;
    this.setState({ selected: '' });
    if (!this.state.selected || this.state.selected !== source) {
      params = { source: source };
      this.setState({ selected: source });
    }
    const { data } = await FeedsAPI.getFeeds(params);
    this.props.setFeeds(data);
  }
  render() {
    return (
      <div className='filter-wrapper'>
        <div
          className={`button ${this.state.selected === 'facebook' ? 'active' : ''}`}
          onClick={this.filter.bind(this, 'facebook')}
        >
          Facebook
        </div>
        <div
          className={`button ${this.state.selected === 'youtube' ? 'active' : ''}`}
          onClick={this.filter.bind(this, 'youtube')}
        >
          Youtube
        </div>
      </div>
    );
  }
}
