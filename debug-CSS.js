(function (window, document) {
	function toggleDebugCSS(tab) {
		var e = "";
		e += 'if (document.getElementById("debugCSS") && document.getElementById("debugJS") ) {document.getElementsByTagName("head")[0].removeChild(document.getElementById("debugCSS"));document.getElementsByTagName("head")[0].removeChild(document.getElementById("debugJS"));document.getElementsByTagName("body")[0].removeChild(document.getElementById("debugCSSInfoBar"));} else {debugCSS = document.createElement("link");debugCSS.rel = "stylesheet";debugCSS.type = "text/css";debugCSS.href = chrome.extension.getURL("/debugCSS.min.css");debugCSS.id = "debugCSS";document.getElementsByTagName("head")[0].appendChild(debugCSS);debugJS = document.createElement("script");debugJS.type = "text/javascript";debugJS.src = chrome.extension.getURL("/debugCSS.js");debugJS.id = "debugJS";document.getElementsByTagName("head")[0].appendChild(debugJS);debugCSSInfoBar = document.createElement("div"),debugCSSInfoBar.id = "debugCSSInfoBar",document.getElementsByTagName("body")[0].appendChild(debugCSSInfoBar)}';
		chrome.tabs.executeScript({
			code: e
		})
	}
	chrome.commands.onCommand.addListener(function (tab) {
		toggleDebugCSS(tab)
	});
	chrome.browserAction.onClicked.addListener(function (tab) {
		toggleDebugCSS(tab)
	})
}(window, document));