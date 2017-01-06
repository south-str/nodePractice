//assert(value[,message])
//assertはassert.ok()のエイリアス
//assert.ok(value[, message])
/**
 * 価値が真実かどうかをテストします。 これはassert.equal（!! value、true、message）と同等です。
 *
 * valueが真実でない場合、messageパラメータの値と等しいmessageプロパティが
 * 設定されたAssertionErrorがスローされます。 messageパラメータが未定義の場合、
 * デフォルトのエラーメッセージが割り当てられます。
 */

const assert = require('assert')

assert(true);
// OK
assert(1);
// OK
assert(false);
// throws "AssertionError: false == true"
assert(0);
// throws "AssertionError: 0 == true"
assert(false, 'it\'s false');
// throws "AssertionError: it's false"
