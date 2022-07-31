let navBar = document.querySelector('.nav__bar')
let secondSection = document.querySelector('.second__section')

window.addEventListener("scroll", () => {
    if (window.scrollY > secondSection.offsetTop - (navBar.offsetHeight + 50)) {
        navBar.classList.add('active')
    } else {
        navBar.classList.remove('active')
    }
})
