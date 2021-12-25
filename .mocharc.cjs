module.exports = {

  // reporter: "spec",
// //   "reporter-option": ["foo=bar", "baz=quux"], // array, not object

  timeout: "2000",
  
  extension: ["ts"],
  spec: "tests/**/*.spec.ts",
  require: "@swc-node/register"
};
