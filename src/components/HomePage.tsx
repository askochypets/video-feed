import React, { Component } from 'react';
import NavbarComponent from './Navbar';
import FeedsFilterComponent from './FeedsFilter';
import FeedComponent from './Feed';
import FeedsAPI from '../services/FeedsAPI';
import Feed from '../interfaces/feed';

export default class HomePageComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.setFeeds = this.setFeeds.bind(this);
    this.state = {
      feeds: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await FeedsAPI.getFeeds();
      this.setFeeds(data);
    } catch (e) {
      console.error(e);
    }
  }

  setFeeds(feeds: Feed[]) {
    this.setState({ feeds: feeds });
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <FeedsFilterComponent setFeeds={this.setFeeds} />
        {this.state.feeds.map((item: object) => (
          <FeedComponent key={JSON.stringify(item)} item={item} />
        ))}
      </div>
    );
  }
}
