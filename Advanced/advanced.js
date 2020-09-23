document.getElementById("circle").style.border = "solid";
document.getElementById("circle").style.borderRadius = "100%";
document.getElementById("circle").style.height = "250px";
document.getElementById("circle").style.width = "250px";
document.getElementById("circle").style.textAlign = "center";
document.getElementById("circle").style.margin = "0 auto";
document.getElementById("circle").style.marginTop = "150px";
document.getElementById("inside").style.textAlign = "center";

var state=true;

function mouseOver() {
	document.getElementById("inside").innerHTML = "you are in the circle";

}

function mouseOutside() {
	document.getElementById("inside").innerHTML = "you are outside the circle";

}

/*function click() {
	document.getElementsByTagName("BODY")[0].style.backgroundColor = "gray";
}

function doubleClick() {
	document.getElementsByTagName("BODY")[0].style.backgroundColor = "blue";
}*/

function click() {
	document.getElementById("circle").style.backgroundColor = "gray";
}

function doubleClick() {
	document.getElementById("circle").style.backgroundColor = "blue";
}

document.getElementById("circle").addEventListener("mouseover", mouseOver, false);
document.getElementById("circle").addEventListener("mouseout", mouseOutside, false);
document.getElementById("circle").addEventListener("click", click, false);
document.getElementById("circle").addEventListener("dblclick", doubleClick, false);