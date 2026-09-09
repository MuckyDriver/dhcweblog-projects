// 404.js - Countdown script showing seconds until redirect away from 404 page.
let secondsElement = document.getElementById("seconds");
let seconds = 15;
let inter = null;

secondsElement.innerText = seconds

inter = setInterval(() => {
    seconds -= 1

    if (seconds >= 0) {
        secondsElement.innerText = seconds
    } else {
        clearInterval(inter)

        // Checking if user has tab history, if not redirect them to the website index page.
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.assign(window.location.origin)
        }
    }
}, 1000)