//assert.ifError(value);
const assert = require('assert');
/**
 * 値がtrueの場合は値をスローします。
 * コールバックでエラー引数をテストするときに便利です。
 */
assert.ifError(0);
// OK
//assert.ifError(1);
// Throws 1
assert.ifError('error');
// Throws 'error'
assert.ifError(new Error());
// Throws Error
