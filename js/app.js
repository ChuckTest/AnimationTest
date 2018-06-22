//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
var start = null;
var element = document.getElementById('test');
element.style.position = 'absolute';
var progress = 0;

function step(timestamp) {
    if (progress < 50) {
        progress = progress + 1;
    }
    element.style.width = progress + '%';
    element.innerHTML=progress + '%';
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);