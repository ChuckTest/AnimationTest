document.addEventListener("DOMContentLoaded", function (event) {
    myFunction();
});

function myFunction() {
    setInterval(moveFunction, 1000);
}

var margin = 0;
function moveFunction() {
    var element = document.getElementById("test");
    margin = margin + 1;
    element.style.marginLeft = margin + "px";
    element.style.marginTop = margin + "px";
}