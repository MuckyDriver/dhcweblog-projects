jQuery(() => {
    
    // Mobile Menu Change
    let menuActionElements = "div.mobile-top > button, header > #close-nav"

    $(menuActionElements).on("click", () => {
        $("header").toggleClass("open")
        $("body").toggleClass("fixed")
    })

    // getYear (copyright 2024 etc)
    $(".getYear").text(new Date().getUTCFullYear())

    // getVersion 
    $(".getVersion").html("1.0.5 Alpha &bull; <a href='/version-changelog.html'>Changelog</a>")

})