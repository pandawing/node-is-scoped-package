'use strict';
var assert = require('power-assert');
var isScopedPackage = require('./');

it('should ', function () {
  assert.strictEqual(isScopedPackage('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(isScopedPackage('unicorns'), 'unicorns & wrong');
});
