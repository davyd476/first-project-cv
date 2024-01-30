const buttons = Array.from(document.querySelectorAll('nav a'))
const navMenu = document.querySelector('.nav')
const menuLine = document.querySelector('.menu-line')
const menuBtn = document.querySelector('.btn-menu')
console.log(buttons)
menuBtn.addEventListener('click', () => {
    buttons.forEach((btn) => {
        menuLine.classList.toggle('is-open')
    })
})
