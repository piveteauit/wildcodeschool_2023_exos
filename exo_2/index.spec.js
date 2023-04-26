const WCSArray = require(".");
const assert = require("assert");

const versions = ["_v1", "_v2"]

console.log(WCSArray)

const PARAMS_FN_TESTS = [
  [["toto", "tata", "tutu", "titi"], "tata", ["toto", "tutu", "titi"], ["toto-0", "tutu-1", "titi-2"]],
  [["lolo", "lala", "lulu", "lili"], "lulu", ["lolo", "lala", "lili"], ["lolo-0", "lala-1", "lili-2"]],
  [["abc", "def", "fgh", "ijk"], "toto", ["abc", "def", "fgh", "ijk"], ["abc-0", "def-1", "fgh-2", "ijk-3"]],
  [[], "", [], []],
]

assert.strictEqual(typeof WCSArray.removeItem_v2, "function", `WCSArray.removeItem_v2 is not a function`);

PARAMS_FN_TESTS.forEach((param) => {
  assert.deepStrictEqual(WCSArray.removeItem_v1(param[0], param[1]), param[2]);
  assert.deepStrictEqual(WCSArray.removeItem_v2(param[0], param[1]), param[3]);
})
