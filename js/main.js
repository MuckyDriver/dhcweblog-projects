// projects.dhcweblogistics.net - main.js - version 1.8
const version = "1.0.8 Alpha";
const links = { changelog: "/version-changelog.html" };
const selector = {
    menuActionElements: "div.mobile-top > button, header > #close-nav",
    tableListTitles: "div.table-list > div.list-header > span"
};

addEventListener("load", () => {
    
    // Mobile Menu Change
    let menuActionElements = document.querySelectorAll(selector.menuActionElements);
    let header = document.querySelector("header");

    menuActionElements.forEach((element) => {
        element.addEventListener("click", () => {
            header.classList.toggle("open")
            document.body.classList.toggle("fixed")
        })
    })

    // getYear, getVersion
    document.querySelector(".getYear").innerHTML = new Date().getUTCFullYear()
    document.querySelector(".getVersion").innerHTML = `${version} &bull; <a href=${links.changelog}>Changelog</a>`

    // Tooltips for table list titles
    let titles = document.querySelectorAll(selector.tableListTitles);

    titles.forEach((titleElement) => {
        let titleTip = titleElement.appendChild(document.createElement("div"));

        titleTip.classList.add("title-tip")
        titleTip.innerText = titleElement.getAttribute("title")

        titleElement.removeAttribute("title")
    })

})