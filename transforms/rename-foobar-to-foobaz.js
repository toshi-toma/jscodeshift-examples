const jscodeshift = require("jscodeshift");

/**
 * @param fileInfo {jscodeshift.FileInfo}
 * @param api {jscodeshift.API}
 * @param options {jscodeshift.Options}
 */
module.exports = function(fileInfo, { jscodeshift }, options) {
  const j = jscodeshift;
  const root = jscodeshift(fileInfo.source);

  root
    .find(j.CallExpression, {
      callee: {
        object: { name: "foo" },
        property: { name: "bar" }
      }
    })
    .forEach(path => {
      j(path).replaceWith(
        j.callExpression(
          j.memberExpression(j.identifier("foo"), j.identifier("baz")),
          path.value.arguments
        )
      );
    });
  return root.toSource();
};
