$(() => {
    let secElement = $("#seconds")
    let seconds = 15
    let inter = null; 

    secElement.text(seconds)
    
    inter = setInterval(() => {
        seconds -= 1
        secElement.text(seconds)

        if (seconds < 0) {
            clearInterval(inter);
            secElement.text("#")
        }
    }, 1000)

    setTimeout(() => {
        if (window.history) {
            window.history.back();
        }

    }, (seconds*1000) + 1000)  

})