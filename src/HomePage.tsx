import React, { Component } from 'react';
import Navbar from './Navbar';
import Feed from './Feed';
import FeedsAPI from './services/FeedsAPI';

export default class HomePage extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      feeds: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await FeedsAPI.getFeeds();
      this.setState({ feeds: data });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.feeds.map((item: object) => (
          <Feed key={JSON.stringify(item)} item={item} />
        ))}
      </div>
    );
  }
}
