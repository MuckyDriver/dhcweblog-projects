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
    $(".getVersion").html("1.0.7 Alpha &bull; <a href='/version-changelog.html'>Changelog</a>")

    // Experimental Feature Test
    let titles = $("div.table-list > div.list-header > span")

    titles.each((i, obj) => {
        $(obj).append(`<div class="title-tip">${obj.getAttribute("title")}</div>`)
        obj.removeAttribute("title");
    })

})