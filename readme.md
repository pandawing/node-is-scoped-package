# is-scoped-package

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Detect if a string is a scoped package name that could be on npm


## Install

```
$ npm install --save is-scoped-package
```


## Usage

```js
var isScopedPackage = require('is-scoped-package');

isScopedPackage('@sanemat/generator-nm');
//=> true

isScopedPackage('generator-nm');
//=> false
```

## API

### isScopedPackage(name) -> boolean

#### name

*Required*  
Type: `string`

Scoped package name.


## See also

* [13 - Working with scoped packages | npm Documentation](https://docs.npmjs.com/getting-started/scoped-packages)
* [scope | npm Documentation](https://docs.npmjs.com/misc/scope)
* `npm help scope`
* [validate-npm-package-name](http://npm.im/validate-npm-package-name)
* [npm-package-arg](http://npm.im/npm-package-arg)
* [is-package](http://npm.im/is-package)


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/pandawing/node-is-scoped-package
[travis-image]: https://img.shields.io/travis/pandawing/node-is-scoped-package/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/node-is-scoped-package/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/node-is-scoped-package/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/is-scoped-package
[npm-image]: https://img.shields.io/npm/v/is-scoped-package.svg?style=flat-square
[daviddm-url]: https://david-dm.org/pandawing/node-is-scoped-package
[daviddm-image]: https://img.shields.io/david/pandawing/node-is-scoped-package.svg?style=flat-square
