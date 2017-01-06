//assert.notDeepStrictEqual(actual, expected[, message]);
const assert = require('assert');
/**
 * 深い厳格な不平等をテストします。
 * assert.deepStrictEqual（）の反対側です。
 */
assert.notDeepEqual({a:1}, {a:'1'});
// AssertionError: { a: 1 } notDeepEqual { a: '1' }

assert.notDeepStrictEqual({a:1}, {a:'1'});
// OK

/*
 * 値が深く厳密に等しい場合は、messageパラメータの値に等しいメッセージプロパティを
 * 設定してAssertionErrorをスローします。
 * messageパラメータが未定義の場合、デフォルトのエラーメッセージが割り当てられます。
 */

