document.addEventListener("DOMContentLoaded", function (event) {
    myFunction();
});

function myFunction() {
    setInterval(moveFunction, 1000);
}

var left = 0;
function moveFunction() {
    var element = document.getElementById("test");
    left = left + 1;
    element.style.marginLeft = left + "px";
}