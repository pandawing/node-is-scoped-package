#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var isScopedPackage = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ is-scoped-package [input]',
    '',
    'Examples',
    '  $ is-scoped-package',
    '  unicorns & rainbows',
    '',
    '  $ is-scoped-package ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

console.log(isScopedPackage(cli.input[0] || 'unicorns'));
