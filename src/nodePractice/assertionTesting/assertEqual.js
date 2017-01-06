//assert.equal(actual, expected[, message])
const assert = require('assert');
/**
 * 等価比較演算子（==）を使用して、実際のパラメータと期待されるパラメータとの間の
 * 浅い強制的な等価性をテストします。
 */
assert.equal(1, 1);
// OK, 1 == 1
assert.equal(1, '1');
// OK, 1 == '1'

//assert.equal(1, 2);
// AssertionError: 1 == 2
assert.equal({a: {b: 1}}, {a: {b: 1}});
// AssertionError: { a: { b: 1 } } == { a: { b: 1 } }
/**
 * 値が等しくない場合は、messageパラメータの値と等しいメッセージプロパティを
 * 設定してAssertionErrorをスローします。
 * messageパラメータが未定義の場合、デフォルトのエラーメッセージが割り当てられます。
 */
