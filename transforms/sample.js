const jscodeshift = require("jscodeshift");

/**
 * @param fileInfo {jscodeshift.FileInfo}
 * @param api {jscodeshift.API}
 * @param options {jscodeshift.Options}
 */
module.exports = function(fileInfo, api, options) {
  return "fileInfo.source";
}