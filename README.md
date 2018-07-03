# bookmark

[![npm](https://img.shields.io/npm/dm/j-bookmask.svg?style=flat-square)](https://www.npmjs.com/package/j-bookmask)
[![npm version](https://img.shields.io/npm/v/j-bookmask.svg?style=flat-square)](https://badge.fury.io/js/j-bookmask)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://www.npmjs.com/package/j-bookmask)

:closed_book: generator bookmark form the directory

You can quickly generate a directory page.
For example, there are many HTML pages in the folder, use bookmark build your `index.html`, Then in gh-pages use it

## Installation

```
npm install j-bookmark -g
```

## Usage

```
$ [bm | bookmark] <command>
```

## Example

```
bm -d /path/to/xx -o /page/to/xx -p './publicPath'
```

## Commands

```bash
  -v, --version            output the version number
  -d --directory [value]   entry directory 
  -o --output [value]      output directory 
  -p --publicPath [value]  output public path (default: ..)
  -h, --help               output usage information
```

## Development

```
git clone https://github.com/lijinke666/bookmark.git
npm install | yarn
npm link
```

## Test Case

```
npm run test
```

## License

[MIT](https://github.com/lijinke666/bookmark/blob/master/LICENCE)
