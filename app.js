const burgerTrigger = document.querySelector(".burgerTrigger");
const burgerMenu = document.querySelector(".burgerMenu");
const nav = document.querySelector("nav");
const list = document.querySelector("ul")

burgerTrigger.addEventListener("click",()=> {
    burgerMenu.classList.toggle("active");
    nav.classList.toggle("active");
    list.classList.toggle("active")
}); 