'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pinboard = function () {
  function Pinboard(apiKey) {
    _classCallCheck(this, Pinboard);

    if (!apiKey) throw 'API key required. Find yours here: https://pinboard.in/settings/password.';
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.pinboard.in/v1';
  }

  _createClass(Pinboard, [{
    key: 'handleRequest',
    value: function handleRequest(endpoint, query, callback) {
      var options = _extends({ format: 'json', auth_token: this.apiKey }, query);
      _request2.default.get('' + this.apiUrl + endpoint, {
        qs: options
      }, callback);
    }
  }, {
    key: 'bookmarks',
    value: function bookmarks(query) {
      var _this = this;

      /*
        tag: String, up to three. 'movies actors hollywood',
        start: Int, default is 0,
        results: Int, number of results to return, default is all,
        fromdt: Date, return bookmarks from this date.
        todt: Date, return boooks created to this date.
        meta: Int, include a change detection signature for each bookmark
      */

      return new Promise(function (resolve, reject) {
        _this.handleRequest('/posts/all', query, function (error, response) {
          if (error) {
            reject(error);
          } else {
            var bookmarks = JSON.parse(response.body);
            resolve(bookmarks);
          }
        });
      });
    }
  }]);

  return Pinboard;
}();

;

module.exports = Pinboard;