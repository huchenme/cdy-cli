# cdy-cli ![Release](https://github.com/huchenme/cdy-cli/workflows/Release/badge.svg) ![npm](https://img.shields.io/npm/v/cdy-cli)

> execute command in a directory

Instead of `cd` into a folder, execute a command and `cd..`, you could use
`cdy-cli` to help you.

## Install

```
$ npm install --global cdy-cli
```

## Usage

Before:

```
$ cd src
$ eslint *
$ cd..
```

After:

```
$ cdy src eslint *
```
