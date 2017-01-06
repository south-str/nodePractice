//assert.deepStrictEqual(actual, expected[, message])
/**
 * 一般的に`assert.deepEqual()`と同じだが、2つの例外がある。
 * まず、厳密な等価演算子(===)を使用してプリミティブ値を比較する。
 * 第2に、オブジェクトの比較には、プロトタイプの厳格な等価チェックを行う。
 */
const assert = require('assert');

assert.deepEqual({a:1}, {a:'1'});
// OK, because 1 == '1'

assert.deepStrictEqual({a:1}, {a:'1'});
// AssertionError: { a: 1 } deepStrictEqual { a: '1' }
// because 1 !== '1' using strict equality
