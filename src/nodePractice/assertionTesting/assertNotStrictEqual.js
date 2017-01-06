//assert.notStrictEqual(actual, expected[, message])
const assert = require('assert');
/*
 * 厳密な不等価演算子（！==）によって決定される厳密な不等式をテストします。
 */
assert.notStrictEqual(1, 2);
// OK

assert.notStrictEqual(1, 1);
// AssertionError: 1 !== 1

assert.notStrictEqual(1, '1');
// OK

/*
 * 値が厳密に等しい場合は、messageパラメータの値と等しいメッセージプロパティを
 * 設定してAssertionErrorをスローします。
 * messageパラメータが未定義の場合、デフォルトのエラーメッセージが割り当てられます。
 */
