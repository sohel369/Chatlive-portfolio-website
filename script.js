let menu = document.getElementById('menu');
let navbar = document.querySelector('.navbar');
let header = document.getElementById("header");

function myfunction() {
    navbar.classList.toggle('activeNav');
}

function functionClose() {
    navbar.classList.remove("activeNav");
}
window.onscroll = () => {
    navbar.classList.remove("activeNav");
}
