@import 'common.js'

var onRun = function (context) {
	var doc = context.document;
	szu(context, doc.displayName());
    cli(context, "open .");
}

var onGenerateIgnore = function (context) {
    cli(context, 'echo "*.sketch" >> .gitignore');
}

var onRepoInfo = function (context) {
    var sketch = context.api(),
        branch = getTheCurrentBranch(context),
        remote = getTheCurrentRemote(context);
    sketch.alert(remote,branch);
}
