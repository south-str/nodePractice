//assert.notEqual(actual, expected[, message])
const assert = require('assert');
/*
 * 不等価比較演算子（！=）を使用して、浅く強要される不等式をテストします。
 */
assert.notEqual(1, 2);
// OK

//assert.notEqual(1, 1);
// AssertionError: 1 != 1

assert.notEqual(1, '1');
// AssertionError: 1 != '1'

/*
 * 値が等しい場合は、messageパラメータの値と等しいmessageプロパティを設定して
 * AssertionErrorがスローされます。
 * messageパラメータが未定義の場合、デフォルトのエラーメッセージが割り当てられます。
 */
