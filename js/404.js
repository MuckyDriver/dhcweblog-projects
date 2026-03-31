let secondsElement = document.getElementById("seconds");
let seconds = 15;
let inter = null;

secondsElement.innerText = seconds

inter = setInterval(() => {
    seconds -= 1

    if (seconds >= 0) {
        secondsElement.innerText = seconds
    }
}, 1000)

setTimeout(() => {
    clearInterval(inter);

    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.assign(window.location.origin)
    }

}, (seconds * 1000) + 500)