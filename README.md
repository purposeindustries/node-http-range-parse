# http-range-parse

Parse HTTP Range headers, RFC7233 compilant.

## Install

Install the [package](http://npmjs.org/packages/http-range-parse) with [npm](http://npmjs.org)

```sh
$ npm install http-range-parse
```

## Usage

```js
var parse = require('http-range-parse');

console.log(parse('items=1-2,995-,-1'))
```

## API

### .parse(str)

Parse the given Range header. The returned object contains the range `unit`,
and the requested range.

```js
parse('items=1-2')
// { unit: 'items', first: 1, last: 2 }

parse('items=-5')
// { unit: 'items', suffix: 5 }

parse('items=1-')
// { unit: 'items', first: 1 }

parse('items=1-2,3-4')
// { unit: 'items', ranges: [{ first: 1, last: 2 }, { first: 3, last: 4 }] }
```

## License

MIT
