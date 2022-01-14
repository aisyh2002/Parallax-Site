var container = document.getElementById("container");

var One = document.getElementById("One");

var X = 0;
var Y = 0;

var centerScreen = (800/2) - (800/2);

window.addEventListener("mousemove", onMouseMove);

function onMouseMove (event) {
    X = event.pageX - container.offsetLeft;
    Y = event.pageY;

    One.style.left = (-X * 0.01) + centerScreen + "px" ;
    Two.style.left = (-X * 0.02) + centerScreen + "px" ;
    Three.style.left = (-X * 0.03) + centerScreen + "px" ;
    Four.style.left = (-X * 0.04) + centerScreen + "px" ;
    Five.style.left = (-X * 0.05) + centerScreen + "px" ;
    Six.style.left = (-X * 0.06) + centerScreen + "px" ;
    
}