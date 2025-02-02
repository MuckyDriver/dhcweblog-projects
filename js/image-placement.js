/* Image Placment Controls Script */
$(() => {
    const placement_images = $("#img_placement_images img")
    const control_next = $("#img-control-next")      
    const control_previous = $("#img-control-previous")
    let ic = 0;
    
    /* Go to next */
    control_next.on("click", () => {
        if (ic == (placement_images.length - 1)) {
            ic = -1
        }

        ic += 1

        placement_images.each((i, element) => {
            if (i == ic) {
                $(element).fadeIn()
            } else {
                $(element).hide()
            }
        })
    })

    /* Go to previous */
    control_previous.on("click", () => {
        if (ic == 0) {
            ic = placement_images.length
        }

        ic -= 1

        placement_images.each((i, element) => {
            if (i == ic) {
                $(element).fadeIn()
            } else {
                $(element).hide()
            }
        })
    })
})