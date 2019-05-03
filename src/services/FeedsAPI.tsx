import baseAPI from './BaseAPI';

class FeedsAPI extends baseAPI {
  getFeeds(params?: object) {
    return this.get('/feeds', params);
  }
}

export default new FeedsAPI();
