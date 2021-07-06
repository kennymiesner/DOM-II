// 1. Onclick
const logo = document.querySelector('.logo-heading')

logo.onclick = function changeContent() {
    logo.textContent = "Fun Bus Travel Agency";
    logo.style.color = "#17A2B8";
}