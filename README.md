# bookmark

[![npm](https://img.shields.io/npm/dm/bookmask.svg?style=flat-square)](https://www.npmjs.com/package/bookmask)
[![npm version](https://img.shields.io/npm/v/bookmask.svg?style=flat-square)](https://badge.fury.io/js/bookmask)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://www.npmjs.com/package/bookmask)


:closed_book: generator bookmark form the directory

You can quickly generate a directory page. 
For example, there are many HTML pages in the folder, use bookmark build `index.html`, Then in gh-pages use it 

## Installation

```
npm install bookmark -g
```

## Usage

```
$ [bm | bookmark] <command>
```

## Example

```
bm -f "index.html" -d ./testDir -p ./publicPath
```

## Commands

```bash
  -v, --version            output the version number
  -d --directory [value]   entry directory (default: /Users/xyzhang/webstudy/bookmark/bin)
  -f --filename [value]    output file name (default: index.html)
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
