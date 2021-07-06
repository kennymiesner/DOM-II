// 1. Onclick
const logo = document.querySelector('.logo-heading')

logo.addEventListener('click', function (event) {
    logo.textContent = "Fun Bus Travel Agency";
    logo.style.color = "#17A2B8";
})

// 2. Onmouseover
const footer = document.querySelector('footer')

footer.addEventListener('mouseover', function (event) {
    footer.style.backgroundColor = "#fff"
})

