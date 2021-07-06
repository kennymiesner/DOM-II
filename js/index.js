// 1. Onmousedown
const logo = document.querySelector('.logo-heading')

logo.addEventListener('mousedown', function (event) {
    logo.textContent = "Fun Bus Travel Agency"
    logo.style.color = "#17A2B8"
})

// 2. Onmouseup
logo.addEventListener('mouseup', function (event) {
    logo.textContent = "Fun Bus"
    logo.style.color = "#000"
})

// 3. Onmouseover
const footer = document.querySelector('footer')

footer.addEventListener('mouseover', function (event) {
    footer.style.backgroundColor = "#fff"
})

// 4. Onmouseleave
footer.addEventListener('mouseleave', function (event) {
    footer.style.backgroundColor = "#FFEBCD"
})