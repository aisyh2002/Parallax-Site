var container = document.getElementById("container");

var layer1 = document.getElementById("layer1");

var X = 0;
var Y = 0;

var centerScreen = (3000/2) - (3000/2);

window.addEventListener("mousemove", onMouseMove);

function onMouseMove (event) {
    X = event.pageX - container.offsetLeft;
    Y = event.pageY;

    layer1.style.left = (-X * 0.08) + centerScreen + "px" ;
    layer2.style.left = (-X * 0.07) + centerScreen + "px" ;
    layer3.style.left = (-X * 0.06) + centerScreen + "px" ;
    layer4.style.left = (-X * 0.05) + centerScreen + "px" ;
    layer5.style.left = (-X * 0.04) + centerScreen + "px" ;
    layer6.style.left = (-X * 0.03) + centerScreen + "px" ;
    layer7.style.left = (-X * 0.0) + centerScreen + "px" ;
}