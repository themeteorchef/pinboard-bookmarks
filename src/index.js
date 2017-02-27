import request from 'request';
import qs from 'querystring';

class Pinboard {
  constructor(apiKey) {
    if (!apiKey) throw 'API key required. Find yours here: https://pinboard.in/settings/password.';
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.pinboard.in/v1';
  }

  handleRequest(endpoint, query, callback) {
    const options = { format: 'json', auth_token: this.apiKey, ...query };
    request.get(`${this.apiUrl}${endpoint}`, {
      qs: options,
    }, callback);
  }

  bookmarks(query) {
    /*
      tag: String, up to three. 'movies actors hollywood',
      start: Int, default is 0,
      results: Int, number of results to return, default is all,
      fromdt: Date, return bookmarks from this date.
      todt: Date, return boooks created to this date.
      meta: Int, include a change detection signature for each bookmark
    */

    return new Promise((resolve, reject) => {
      this.handleRequest('/posts/all', query, (error, response) => {
        if (error) {
          reject(error);
        } else {
          const bookmarks = JSON.parse(response.body);
          resolve(bookmarks);
        }
      });
    });
  }
};

module.exports = Pinboard;
