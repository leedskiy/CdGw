const headerList = document.querySelector(".header__list");
const headerItems = document.querySelectorAll(".header__item");
const burger = document.querySelector(".header__burger");
const burgerBars = document.querySelectorAll(".burger__bar");

burger.addEventListener("click", () => {
    burger.classList.toggle("b-active");
    burger.classList.toggle("b-not-active");
    headerList.classList.toggle("hl-active");
    headerList.classList.toggle("hl-not-active");
    burgerBars.forEach(el => {
        el.classList.toggle("bb-active");
        el.classList.toggle("bb-not-active");
    })
})

headerItems.forEach(elem => {
    elem.addEventListener("click", () => {
        burger.classList.remove("b-active");
        burger.classList.add("b-not-active");
        headerList.classList.remove("hl-active");
        headerList.classList.add("hl-not-active");
        burgerBars.forEach(el => {
            el.classList.remove("bb-active");
            el.classList.add("bb-not-active");
        })
    })
})
