let links = document.querySelectorAll(".js-link"); /* links mapeados */
let sections = document.querySelectorAll(".section"); /* sections mapeadas */

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        console.log(section)
    })
})