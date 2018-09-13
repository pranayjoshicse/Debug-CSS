var infoBar = document.getElementById("debugCSSInfoBar");

function init() {
	infoBar.innerHTML = "<p>Hold Ctrl Key & hover on any element for detail</p>"
}

function updateInfoBar(e) {
	var n = e.target.id.toString() || "",
		t = e.target.classList.toString() || "",
		o = e.target.nodeName.toLowerCase() || "";
	if (!infoBar) return !1;
	infoBar.innerHTML = "<p>Hovered Element Detail(s)= { Element Type: <b> " + o + "</b>; Class(es) Applied: <b> " + t + "</b>; Element Id: <b> " + n + "</b>; }</p>"
}

function showInfoBar(e) {
	infoBar.className = "", e.ctrlKey && (infoBar.className = "show")
}
init(), 
document.addEventListener("mouseover", updateInfoBar, !1), 
window.addEventListener("keydown", showInfoBar, !1), 
window.addEventListener("keyup", showInfoBar, !1);