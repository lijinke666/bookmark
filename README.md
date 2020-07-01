# bookmark

[![npm](https://img.shields.io/npm/dm/j-bookmark.svg?style=flat-square)](https://www.npmjs.com/package/j-bookmark)
[![npm version](https://img.shields.io/npm/v/j-bookmark.svg?style=flat-square)](https://badge.fury.io/js/j-bookmark)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://www.npmjs.com/package/j-bookmark)

:closed_book: generator bookmark form the directory

You can quickly generate a directory page.
For example, there are many HTML pages in the folder, use bookmark build your `index.html`, Then in gh-pages use it

## Installation

```bash
yarn global add j-bookmark
// npm install j-bookmark -g
```

## Usage

```bash
[bm | bookmark] <command>
```

## Example

```js
src
├── test
│   └── a.html
└── test.html
```

```bash
bm -d /path/to/xx -o /page/to/xx -p /path
```

```bash
$ bm -d src

# output
<ul>
  <li>
    <a href="src/test.html" target="_blank">1. test.html</a>
  </li>
  <li>
    <a href="src/test/a.html" target="_blank">2. a.html</a>
  </li>
</ul>
```

```bash
$ bm -d src -p /prefix

# output
<ul>
  <li>
    <a href="/prefix/test.html" target="_blank">1. test.html</a>
  </li>
  <li>
    <a href="/prefix/test/a.html" target="_blank">2. a.html</a>
  </li>
</ul>
```

```bash
$ bm -d src --ignore **/test/**

# output
<ul>
  <li>
    <a href="test.html" target="_blank">1. test.html</a>
  </li>
</ul>
```

```bash
$ bm -d src -o output.html

# output

├── output.html
├── test
│   └── a.html
└── test.html
```

## Commands

```bash
  -v, --version            output the version number
  -d --directory [value]   entry directory (default: process.cwd())
  -o --output [value]      output directory (default: process.cwd() + index.html)
  -p --publicPath [value]  output public path (default: '')
  -i --ignore [value]      Add a pattern or an array of glob patterns to exclude matches (default: node_modules) //https://github.com/isaacs/node-glob#options
  -h, --help               output usage information
  --disableAnimate         Disable bookmark animate (default: false)
```

## Development

```bash
git clone https://github.com/lijinke666/bookmark.git
npm install | yarn
npm link
```

## Test Case

```bash
npm run test
```

## License

[MIT](https://github.com/lijinke666/bookmark/blob/master/LICENCE)
