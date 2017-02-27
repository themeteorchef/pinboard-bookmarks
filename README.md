#### Pinboard bookmarks

Fetch your bookmarks from the [Pinboard.in](https://pinboard.in) service.

1. Usage
2. Development
3. License

---

**Note**: This is NOT a full implementation of the Pinboard API. If you require more than just the ability to retrieve bookmarks, take a look at [this package](https://www.npmjs.com/package/node-pinboard). This package is the subject of a tutorial on writing an NPM package [which you can find here](https://themeteorchef.com/tutorials/writing-an-npm-package).

---

#### Usage

Create a new instance of `Pinboard`, passing [your API token](https://pinboard.in/settings/password) for authentication. One method exists on the returned object `.bookmarks()`, which accepts an object of arguments matching those allowed for the [https://api.pinboard.in/v1/posts/all](https://pinboard.in/api) endpoint on Pinboard.

Example Usage:

```javascript
import Pinboard from 'pinboard-bookmarks';

const pinboard = new Pinboard('<Your API Key>');

pinboard.bookmarks({ /* options */ })
.then((bookmarks) => {
  // bookmarks is an array of objects.
})
.catch((error) => {
  // handle any errors.
});
```

Example Response:

```javascript
[ { href: 'https://en.wikipedia.org/wiki/List_of_cognitive_biases',
    description: 'List of cognitive biases - Wikipedia',
    extended: '',
    meta: 'cb148abf4874037470fcdc1dbd728c68',
    hash: '49d477217bd7e2cfd34cfaac4cf693d0',
    time: '2017-02-25T16:36:04Z',
    shared: 'yes',
    toread: 'no',
    tags: '' },
  { href: 'https://en.wikipedia.org/wiki/Hyperbolic_discounting',
    description: 'Hyperbolic discounting - Wikipedia',
    extended: '',
    meta: '32733630e54874cce76631b50d3c2fab',
    hash: 'bac854e01584065672d56f9f1d28fff5',
    time: '2017-02-25T16:35:29Z',
    shared: 'yes',
    toread: 'no',
    tags: '' },
  { href: 'https://twitter.com/Learn_Things/status/834228048685850624',
    description: 'twitter.com',
    extended: '',
    meta: 'e7f664ebd63e6512d49d29f72861899a',
    hash: '5a2cfc5aa4f4de345f2c53edc5d3d7c6',
    time: '2017-02-25T04:00:19Z',
    shared: 'yes',
    toread: 'yes',
    tags: '' },
  { href: 'https://auth0.com/blog/reactjs-authentication-tutorial/',
    description: 'ReactJS Authentication Tutorial',
    extended: '',
    meta: '8edbd73aa54d9be5e16ef61621871473',
    hash: '9ad5147756798593278532270a5b02d3',
    time: '2017-02-23T18:59:31Z',
    shared: 'yes',
    toread: 'no',
    tags: '' },
  { href: 'https://stripe.com/blog/idempotency',
    description: 'Designing robust and predictable APIs with idempotency',
    extended: '',
    meta: '13689e95887420a4c3c1146f2290078b',
    hash: 'f34004e21c0b8fbe3c422a1c80e3aa5f',
    time: '2017-02-23T17:03:46Z',
    shared: 'yes',
    toread: 'no',
    tags: '' } ]
```

#### Development
If you wish to make changes, this package relies on [Babel](https://babeljs.com) to compile its source. Clone the repo and run `npm install`, followed by `npm run build`. You can test the code by `import`ing or `require()`ing the `index.js` file in the root of the repository.

#### License

Copyright 2017 The Meteor Chef

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
