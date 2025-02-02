// Image Viewer V1.0

$(() => {

    // Image Viewer Stuff
    let ivp = $("div.image-viewer-premium")
    let imgLookarea = ivp.attr("data-getfrom") || "body img"
    let imageContainer = $(".-images")
    let imgTitle = $("#ivp-title")
    let currentNumber = 0;
    let button = {
        "prev": $("#ivp-prev"),
        "next": $("#ivp-next"),
        "close": $("#ivp-close")
    }

    // Switch to current Image
    function toImage(number) {
        let images = $(".-images > img")
        currentNumber = number

        images.hide()

        images.each((i, obj) => {
            let img = $(obj);
            let alt = img.attr("alt");
            let title = img.attr("title");

            if (i == currentNumber) {
                img.fadeIn()
                imgTitle.text(title || alt)
            }
        })
    }

    // Load in the Images
    $(imgLookarea).each((i, obj) => {
        let img = $(obj);

        if (img.attr("data-ivpignore") == null) { // Ensuring the image is allowed to be copied and used.
            img.clone().appendTo(imageContainer)
            img.css("cursor", "zoom-in")
    
            img.on("click", () => {
                ivp.addClass("open")
                $("body").addClass("fixed")
    
                toImage(i)
            })
        }
    })

    // Altering between images
    const updateImage = (count) => {
        let images = $(".-images > img")
        currentNumber += count

        if (count < 0) {
            if (currentNumber < 0) {
                currentNumber = (images.length - 1)
            }
        } else if (count > 0) {
            if (currentNumber == images.length) {
                currentNumber = 0
            }
        }

        toImage(currentNumber)
    }

    // Prev Button
    button.prev.on("click", () => {
        updateImage(-1)
    })

    // Next Button
    button.next.on("click", () => {
        updateImage(1)
    })

    // Closing
    function close() {
        ivp.removeClass("open")
        $("body").removeClass("fixed")
    }

    button.close.on("click", () => { close() })
    
    $("html").on("keyup", (e) => {
        if (e.key == "Escape") { close() }
    })
})