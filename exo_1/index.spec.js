const WCSMath = require(".");
const assert = require("assert");

const versions = ["_v1", "_v2", "_v3"]

console.log(WCSMath)

const PARAMS_FN_TESTS = [
  [10, 3],
  [8, 3],
  [11, 2],
  [20, 22],
]


const ADD_FN = "add";
const SUB_FN = "sub";


versions.forEach((v) => {
  // TEST ADD Funcs
  assert.strictEqual(typeof WCSMath[`${ADD_FN}${v}`], "function", `WCSMath.${ADD_FN}${v} is not a function`);

  assert.strictEqual(WCSMath[`${ADD_FN}${v}`](...PARAMS_FN_TESTS[0]), 13);
  assert.strictEqual(WCSMath[`${ADD_FN}${v}`](...PARAMS_FN_TESTS[1]), 11);
  assert.strictEqual(WCSMath[`${ADD_FN}${v}`](...PARAMS_FN_TESTS[2]), 13);
  assert.strictEqual(WCSMath[`${ADD_FN}${v}`](...PARAMS_FN_TESTS[3]), 42);

  // TEST SUB Funcs
  assert.strictEqual(typeof WCSMath[`${SUB_FN}${v}`], "function", `WCSMath.${SUB_FN}${v} is not a function`);

  assert.strictEqual(WCSMath[`${SUB_FN}${v}`](...PARAMS_FN_TESTS[0]), 7);
  assert.strictEqual(WCSMath[`${SUB_FN}${v}`](...PARAMS_FN_TESTS[1]), 5);
  assert.strictEqual(WCSMath[`${SUB_FN}${v}`](...PARAMS_FN_TESTS[2]), 9);
  assert.strictEqual(WCSMath[`${SUB_FN}${v}`](...PARAMS_FN_TESTS[3]), -2);
})
