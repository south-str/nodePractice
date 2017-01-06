//assert.throws(block[, error][, message])
const assert = require('assert');
/*
 * ファンクションブロックがエラーをスローすることを期待します。
 *
 * 指定すると、errorはコンストラクター、RegExp、または検証関数になります。
 *
 * 指定された場合、ブロックがスローされなかった場合、AssertionErrorによって提供されるメッセージがメッセージになります。
 *
 * コンストラクタを使用してinstanceofを検証します。
 */
assert.throws(
  () => {
    throw new Error('Wrong value');
  },
  Error
);
/*
 * 正規表現を使用してエラーメッセージを検証する：
 */
assert.throws(
  () => {
    throw new Error('Wrong value');
  },
  /value/
);
/*
 * カスタムエラーの検証：
 */
assert.throws(
  () => {
    throw new Error('Wrong value');
  },
  function(err) {
    if ( ( err instanceof Error) && /value/.test(err) ) {
      return true;
    }
  },
  'unexpected error'
);

/*
 * エラーは文字列にすることはできません。
 * 文字列が2番目の引数として指定された場合、エラーは省略され、
 * 文字列は代わりにメッセージに使用されます。
 * これは、見逃しやすいミスにつながる可能性があります。
 */
