# is-scoped-package

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> My spectacular module


## Install

```
$ npm install --save is-scoped-package
```


## Usage

```js
var isScopedPackage = require('is-scoped-package');

isScopedPackage('unicorns');
//=> unicorns & rainbows
```



## API

### isScopedPackage(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## See also

* [scope | npm Documentation](https://docs.npmjs.com/misc/scope)
* `npm help scope`
* [validate-npm-package-name](http://npm.im/validate-npm-package-name)
* [npm-package-arg](http://npm.im/npm-package-arg)
* [is-package](http://npm.im/is-package)


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/sanemat/is-scoped-package
[travis-image]: https://img.shields.io/travis/sanemat/is-scoped-package/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/is-scoped-package/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/is-scoped-package/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/is-scoped-package
[npm-image]: https://img.shields.io/npm/v/is-scoped-package.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sanemat/is-scoped-package
[daviddm-image]: https://img.shields.io/david/sanemat/is-scoped-package.svg?style=flat-square
