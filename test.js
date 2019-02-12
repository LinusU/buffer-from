var bufferFrom = require('./')
var assert = require('assert')

assert.strictEqual(bufferFrom([1, 2, 3, 4]).toString('hex'), '01020304')

var arr = new Uint8Array([1, 2, 3, 4])
assert.strictEqual(bufferFrom(arr.buffer, 1, 2).toString('hex'), '0203')

assert.strictEqual(bufferFrom('test', 'utf8').toString('hex'), '74657374')

var buf = bufferFrom('test')
assert.strictEqual(bufferFrom(buf).toString('hex'), '74657374')
