document.addEventListener("DOMContentLoaded", function (event) {
    getBodySize();
    myFunction();
});

var refreshIntervalId;
function myFunction() {
    refreshIntervalId = setInterval(moveFunction, 1000);
}


var bodyHeight;
var bodyWidth;
function getBodySize() {
    var element = document.getElementsByTagName("BODY")[0];
    var positionInfo = element.getBoundingClientRect();
    bodyHeight = positionInfo.height;
    bodyWidth = positionInfo.width;
    console.log(bodyHeight);
    console.log(bodyWidth);
}

var margin = 0;
function moveFunction() {
    var element = document.getElementById("test");
    margin = margin + 10;
    if (margin > bodyHeight || margin > bodyWidth) {
        clearInterval(refreshIntervalId);
    }
    element.style.marginLeft = margin + "px";
    element.style.marginTop = margin + "px";
}