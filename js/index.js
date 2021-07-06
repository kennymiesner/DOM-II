// 1. Onmousedown
const logo = document.querySelector('.logo-heading')

logo.addEventListener('mousedown', function () {
    logo.textContent = "Fun Bus Travel Agency"
    logo.style.color = "#17A2B8"
})

// 2. Onmouseup
logo.addEventListener('mouseup', function () {
    logo.textContent = "Fun Bus"
    logo.style.color = "#000"
})

// 3. Onmouseover
const footer = document.querySelector('footer')

footer.addEventListener('mouseover', function () {
    footer.style.backgroundColor = "#fff"
})

// 4. Onmouseleave
footer.addEventListener('mouseleave', function () {
    footer.style.backgroundColor = "#FFEBCD"
})

// 5. Onclick / Remove
let image = document.querySelector('.intro img')

image.addEventListener('click', function () {
    image.remove();
})