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
    $(".getVersion").text("1.0.1 " + document.lastModified)

    // SVG Logo, Footer Create
    $("svg.svg-logo").load("/components/icon.html")

    // Cookies > Custom Name and Color Scheme
    const prompted = new Event("cookiePrompt") // Custom Event
    let prompt_result = null; // This will be cookie data eventually.

    function updateSite() {
        let data = document.cookie.split(";")[0]
        let their_name = data.split("&")[0]
        let their_col = data.split("&")[1]
        let reg = /^#([0-9a-f]{3}){1,2}$/i;

        // Custom Colours
        if (their_col && reg.test(their_col)) {
            let root = $(":root")

            root.css({
                "--mainColorDesign": their_col,
                "--mainColorDesignTrans": their_col + "33",
                "--mainColorDesignTrans2": their_col + "11"
            })
        }

        // Username Set
        if ((data != "no") && (their_name != "")) {
            $("nav :first-child > span").text("Hi, " + their_name)
        }
    }

    if (document.cookie != "") {
        updateSite()
    }

    function newPrompt(text) {
        let dialog = $("div.prompt-dialog")
        let dialogCancel = $("div.prompt-dialog button.cancel")
        let dialogConfirm = $("div.prompt-dialog button.confirm")
        let displayText = $("div.prompt-dialog div.info > div.text")

        dialog.addClass("activated")

        displayText.html(text)

        dialogCancel.on("click", () => {
            dialog.removeClass("activated")
            dispatchEvent(prompted)
        })

        dialogConfirm.on("click", () => {
            let name = $("div.prompt-dialog div.info input#your_name").val()
            let col = $("div.prompt-dialog div.info input#col").val()

            prompt_result = [name, col]

            dialog.removeClass("activated")
            dispatchEvent(prompted)
        })

    }

    // Lets make sure the page their are on is the homepage.
    if (window.location.href === window.location.origin + "/") {

        if (document.cookie == "") {

            // Lets create a prompt!
            let p1 = "Welcome to this website, you can customize your identity/colors if you wish."
            let p2 = "Notice: This website uses cookies on your browser to work, even if you confirm or don't show again!"
            newPrompt(`${p1}<br><br><span>${p2}</span>`)

            // Listen out for the prompt to be complete, then create a cookie.
            addEventListener("cookiePrompt", () => {

                if (prompt_result) {
                    document.cookie = `${prompt_result[0]}&${prompt_result[1]}; SameSite=None; expires=Thu, 18 Dec 2099 12:00:00 UTC; Secure`;
                    updateSite()
                } else {
                    document.cookie = `no; SameSite=None; expires=Thu, 18 Dec 2099 12:00:00 UTC; Secure`;
                }

            })

        }
    }

})