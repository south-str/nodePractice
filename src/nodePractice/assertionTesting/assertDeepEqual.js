const assert = require('assert');
//assert.deepEqual(actual, expected[, message])
/**
 * プリミティブ値は等価比較演算子(==)でチェックされる。
 * 列挙可能な「独自の」プロパティのみが考慮される。
 * `deepEqual()`ではオブジェクトのプロトタイプ、添付シンボル、または列挙できない
 * プロパティはテストされない。これは潜在的に驚くべき結果につながる。
 * 例えば、次の例では、Errorオブジェクトのプロパティは列挙できないため、
 * AssertionErrorはスローされない。
 */
// WARNING: This does not throw an AssertionError!
assert.deepEqual(Error('a'), Error('b'));

/**
 * 「深い」等価とは、子オブジェクトの列挙可能な「独自の」プロパティも評価されることを
 * 意味する。
 */
const obj1 = {
  a : {
    b : 1
  }
};
const obj2 = {
  a : {
    b : 2
  }
};
const obj3 = {
  a : {
    b : 1
  }
};
const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
// OK, object is equal to itself

assert.deepEqual(obj1, obj2);
// AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }

assert.deepEqual(obj1, obj3);
// OK, objects are equal

assert.deepEqual(obj1, obj4);
// AssertionError: { a: { b: 1 } } deepEqual {}
// Prototypes are ignored

/**
 * 値が等しくない場合は、messageパラメータの値と等しいメッセージプロパティを設定して
 * AssertionErrorをスローします。 messageパラメータが未定義の場合、
 * デフォルトのエラーメッセージが割り当てられます。
 */
