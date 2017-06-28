var caretId = "fljalecfjciodhpcledpamjachpmelml";

var sendToCaret = function (command, argument, quiet) {
	var message = {
		command: command,
		argument: argument,
		quiet: quiet
	};
	chrome.runtime.sendMessage(caretId, message);
};

chrome.runtime.onMessageExternal.addListener(
	function (message, sender, sendResponse) {
		var data = message.context.selection;
		var options = message.options || {};
		var result = js_beautify(data, options);
		sendToCaret('editor:insert', result, true);
		sendToCaret('status:set', "Completed JS Beautify'd the JavaScript", true);
	});