function removeFileExtension(layerName){
	if([layerName containsString:@"."]){
		var nameArray = [layerName componentsSeparatedByString:@"."];
		var name = nameArray[0];
		return name;
	} else {
		return layerName;
	}
}

function cli(context,  command) {
	var task = NSTask.alloc().init()
	var pipe = NSPipe.pipe()

	var path = getCurrentDirectory(context)
	command = `cd "${path}" && ${command}`

	task.setLaunchPath_('/bin/bash')
	task.setArguments_(NSArray.arrayWithObjects_('-c', '-l', command, null))
	task.standardOutput = pipe
	task.launch()

	const data = pipe.fileHandleForReading().readDataToEndOfFile()
	return NSString.alloc().initWithData_encoding_(data, NSUTF8StringEncoding)
}

function getCurrentDirectory (context) {
	return context.document.fileURL().URLByDeletingLastPathComponent().path()
}

function szu(context, name) {
	var docname = removeFileExtension(name);
	cli(context, "mkdir -p ./" + docname);
	cli(context, "unzip -o -a " + name + " -d ./" + docname);
}


