//assert.doesNotThrow(block[, error][, message])
const assert = require('assert');
/**
 * ファンクションブロックがエラーをスローしないことをアサートします。
 * 詳細は、assert.throws（）を参照してください。
 *
 * assert.doesNotThrow（）が呼び出されると、すぐにブロック関数が呼び出されます。
 *
 * エラーがスローされ、errorパラメータで指定されたものと同じ型の場合、
 * AssertionErrorがスローされます。
 * エラーのタイプが異なる場合、またはerrorパラメーターが未定義の場合、
 * エラーは呼び出し元に伝搬されます。
 *
 * たとえば、アサーションに一致するエラータイプがないため、
 * 次のようにTypeErrorがスローされます。
 */
/*
assert.doesNotThrow(
  () => {
    throw new TypeError('Wrong value');
  },
  SyntaxError
);
*/
/**
 * ただし、次のようにすると、 'Got unwanted exception（TypeError）..'
 * というメッセージが表示されるAssertionErrorが発生します。
 */
assert.doesNotThrow(
  () => {
    throw new TypeError('Wrong value');
  },
  TypeError
);

/**
 * AssertionErrorがスローされ、messageパラメータに値が指定されている場合、
 * messageの値はAssertionErrorメッセージに追加されます。
 */
assert.doesNotThrow(
  () => {
    throw new TypeError('Wrong value');
  },
  TypeError,
  'Whoops'
);
// Throws: AssertionError: Got unwanted exception (TypeError). Whoops
