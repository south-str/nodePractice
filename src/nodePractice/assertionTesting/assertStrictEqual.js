//assert.strictEqual(actual, expected[, message])
const assert = require('assert');
/*
 * 厳密な等価演算子（===）によって決定される厳密な等価性をテストします。
 */
//assert.strictEqual(1, 2);
// AssertionError: 1 === 2

assert.strictEqual(1, 1);
// OK

assert.strictEqual(1, '1');
// AssertionError: 1 === '1'

/*
 * 値が厳密に等しくない場合、メッセージパラメータの値と等しいメッセージプロパティを
 * 設定してAssertionErrorがスローされます。
 * messageパラメータが未定義の場合、デフォルトのエラーメッセージが割り当てられます。
 */
