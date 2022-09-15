let iphone = document.querySelector("#iphone");
let body = document.querySelector('body');
let menuIcone = document.querySelector(".icon");
let header = document.querySelector('header');
let content = document.querySelector('#content');
let mood = "open";
// menu 
let menu = document.createElement("ul");
menu.className = "sec-menu";
menu.innerHTML =
    `<a href="">
        <li>Home</li>
    </a>
    <a href="">
        <li>Products</li>
    </a>
    <a href="">
        <li>News</li>
    </a>
    <a href="">
        <li>About</li>
    </a>
    <a href="">
        <li>Contact</li>
    </a>`
menu.style.display = "block";

header.appendChild(menu);

function changeColor(src, id) {
    iphone.src = src;
    body.style.backgroundColor = `#${id}`;
    header.style.backgroundColor = `#${id}`;
}

function changeIcon() {
    if (mood === "open") {
        menuIcone.innerHTML = `<i style="font-size:40px ;" class="fa-solid fa-xmark"></i>`;
        menu.style.bottom = "-195%"
        menu.style.zIndex = "1";
        mood = "close";
    } else {
        menuIcone.innerHTML = `<i id="menuIcone" class="fa-solid fa-bars"></i>`;
        menu.style.bottom = "0%"
        menu.style.zIndex = "-1"
        mood = "open";
    }
}