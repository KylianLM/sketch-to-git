@import 'common.js'
var onRun = function(context) {
  var doc = context.document;
  var documentName = removeFileExtension(doc.displayName());
  log(documentName);
}
