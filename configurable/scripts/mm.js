// Quick Mobile Menu Implentation!
$(() => {
    // Navigation Elements
    $("nav").children().clone().appendTo(".mm-nav")
    $("header > div.logo > a > img").clone().prependTo(".mm .mm-top")

    // Toggle Mobile Menu
    let toggle = $(".mm > .mm-top > button, header > button.mm-open")

    toggle.on("click", () => {
        $(".mm, html").toggleClass("mm-is-open")
    })
})