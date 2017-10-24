var shape = document.getElementById("random-shape");
var timeDisp = document.getElementById("timer");
var avgDisp = document.getElementById("average");

var prevTime = Date.now();
var currTime = Date.now();

var times = [];

var maxSize = {width: 200, height: 200};
var minSize = {width: 30, height: 30};
var screenSize = {width: window.screen.width, height: window.screen.height};

function changeShape() {
    if (Math.floor(Math.random() * 100) > 50) {
        shape.className = "circle";
    }
    else {
        shape.className = "square";
    }
    
    var size = Math.floor(Math.random() * (maxSize.width - minSize.width)) + minSize.width;
    shape.style.width = size + "px";
    shape.style.height = size + "px";
    
    shape.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

function randomSpot() {
    var marginLeft = Math.floor(Math.random() * (screenSize.width - maxSize.width));
    var marginTop = Math.floor(Math.random() * (screenSize.height - maxSize.height - 71));

    shape.style.marginLeft = marginLeft + "px";
    shape.style.marginTop = marginTop + "px";
}

function shapeClick() {
    currTime = Date.now();
    var diff = (currTime - prevTime) / 1000;
    timeDisp.innerHTML = diff;
    
    times.push(diff);
    var sum = 0;
    for (var i = 0; i < times.length; i++) {
        sum += times[i];
    }
    avgDisp.innerHTML = sum / (times.length - 1);
    
    
    shape.style.display = "none";
    setTimeout(function() {
        changeShape();
        randomSpot();
        shape.style.display = "block";
        prevTime = Date.now();
    }, Math.random() * 2000);
}

shapeClick();




