//assert.fail(actual, expected, message, operator)
const assert = require('assert');
/**
 * AssertionErrorをスローします。
 * メッセージが偽である場合、エラーメッセージは、提供された演算子によって分離された
 * 実際の値と期待値として設定されます。
 * それ以外の場合、エラーメッセージはmessageの値です。
 */
//assert.fail(1, 2, undefined, '>');
// AssertionError: 1 > 2

assert.fail(1, 2, 'whoops', '>');
// AssertionError: whoops
