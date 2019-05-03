import qs from 'qs';
import axios from 'axios';

/*
 * Common API class.
 * @class Api
 */
export default class BaseAPI {
  url: string;
  tool: any;

  constructor() {
    this.url = this.urlBuilder();
  }

  /*
   * GET representation
   * @method get
   * @async
   * @return {Promise}
   */
  get(endpoint: string, params?: object, options: object = {}) {
    const queryParams = params ? `?${qs.stringify(params)}` : '';
    return this._makeRequest({
      method: 'GET',
      url: this.url + endpoint + queryParams,
      ...options,
    });
  }

  /*
   * Common method for build url
   * @method urlBuilder
   * @return {string} Url
   */
  private urlBuilder(): string {
    const API_ENV = process.env.REACT_APP_API_ENV;
    return `http://${API_ENV}`;
  }

  /*
   * Common method for preparing request object
   * @method makeRequest
   * @return {object} Axios request object
   */
  private _makeRequest(options: object) {
    return axios(options);
  }
}
