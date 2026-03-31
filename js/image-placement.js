/* Image Placment Controls Script */
$(() => {
    const placement_images = $("#img_placement_images img")
    const control_next = $("#img-control-next")      
    const control_previous = $("#img-control-previous")
    let index = 0;

    // Update the image
    function update_image(number) {
        placement_images.each((i, element) => {
            if (i == number) {
                $(element).fadeIn().css('display', 'block')
            } else {
                $(element).hide()
            }
        })
    }
    
    /* Go to next */
    control_next.on("click", () => {
        if (index == (placement_images.length - 1)) {
            index = -1
        }

        update_image((index += 1))
    })

    /* Go to previous */
    control_previous.on("click", () => {
        if (index == 0) {
            index = placement_images.length
        }

        update_image((index -= 1))
    })
})