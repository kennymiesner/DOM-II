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

// 6. Dblclick
let html = document.querySelector('html')

html.addEventListener('dblclick', function () {
    html.style.backgroundColor = "red"
})

// 7. Keydown
function leftArrow(event) {
    if (event.keyCode === 37) {
        image.style.height = "50vh"
    }
}

document.addEventListener('keydown', leftArrow)

// 7. Keyup
function rightArrow(event) {
    if (event.keyCode === 39) {
        image.style.height = "auto"
    }
}

document.addEventListener('keyup', rightArrow)

// 8. Wheel
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.content-destination img');
el.onwheel = zoom;