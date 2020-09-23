document.addEventListener("DOMContentLoaded", function (event) {
    getBodySize();
    myFunction();
});

var refreshIntervalId;
function myFunction() {
    refreshIntervalId = setInterval(moveFunction, 1000);
}

var maxMarginTop;
var maxMarginLeft;
function getBodySize() {
    var element = document.getElementsByTagName("BODY")[0];
    var positionInfo = element.getBoundingClientRect();
    var bodyHeight = positionInfo.height;
    var bodyWidth = positionInfo.width;
    console.log(bodyHeight);
    console.log(bodyWidth);

    var div = document.getElementById("test");
    var divPositionInfo = div.getBoundingClientRect();
    maxMarginLeft = bodyWidth - divPositionInfo.width;
    maxMarginTop = bodyHeight - divPositionInfo.height;
}

var margin = 0;
function moveFunction() {
    var element = document.getElementById("test");
    margin = margin + 10;
    if (margin > maxMarginLeft || margin > maxMarginTop) {
        clearInterval(refreshIntervalId);
    }
    element.style.marginLeft = margin + "px";
    element.style.marginTop = margin + "px";
}