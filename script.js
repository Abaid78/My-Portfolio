let container = document.getElementById("container");
let manu = document.getElementById("manu");
let navlist=document.getElementById("navlist")
let none_display=document.getElementsByClassName(".none-display")
manu.addEventListener("click", function () {
    container.style.height = "max-content"
    navlist.classList.toggle("none-display")
})
container.addEventListener("focusout", function () {
    container.style.height = "60px";
})