$(() => {
    // Vars and Consts
    let accordionTop = $("div.accordion-item > div.accordion-top");
    let slideDuration = 150;

    // Function
    function toggleAccordion(handle) {
        let content = $(handle).siblings(".content")
        let all = $(handle).parent().parent().find("div.accordion-item > div.content")

        // Closing all others
        all.parent().removeAttr("data-open")
        all.slideUp(slideDuration)

        // Opening up clicked!
        content.slideToggle(slideDuration)
        $(handle).parent().attr("data-open", "")
    }

    // Event Handling
    accordionTop.on("click", function() {
        toggleAccordion(this)
    })

    accordionTop.on("keyup", function(e) {
        if (e.key == "Enter") {
            toggleAccordion(e.target)
        }
    })
})