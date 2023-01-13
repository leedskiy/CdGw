const element = document.documentElement;
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");
const headerList = document.querySelector(".header__list");
const headerItems = document.querySelectorAll(".header__item");
const strs = document.querySelectorAll(".str");
const headerTheme = document.querySelector(".header__theme");
const headerBurger = document.querySelector(".header__burger");
const headerBurgerBars = document.querySelectorAll(".burger__bar");
const title = document.querySelectorAll(".title");
const beafs = document.querySelectorAll(".beaf");
const b3Photos = document.querySelectorAll(".b3-photo");
const footer = document.querySelector(".footer");

const style = document.createElement('style');
wrapper.insertAdjacentElement('afterend', style);

function changeTheme(theme) {
    if (theme === 'dark') {
        body.style.cssText = `
            background-color: rgb(0, 0, 0);
        `;

        style.innerHTML = `
            ::-webkit-scrollbar-track{
                background-color: rgb(0, 0, 0);
                border: 2px solid rgb(255, 255, 255);
                border-top: 0px;
                border-bottom: 0px;
            }
                        
            ::-webkit-scrollbar-thumb{
                background-color: rgba(255, 144, 220, 0.7);
                border: 2px solid rgb(255, 255, 255);
            }
        `;

        let styleInner = style.innerHTML;

        header.style.cssText = `
            background-color: rgba(0, 0, 0, 0.90);
            border-bottom: 2px solid rgb(255, 255, 255);
        `;

        strs.forEach(elem => {
            elem.classList.add("dark-text");
        })

        strs.forEach(elem => {
            elem.classList.remove("light-text");
        })

        if (element.clientWidth <= 769) {
            headerList.style.cssText = `
                background-color: rgba(0, 0, 0, 0.90);
                border-top: 2px solid rgb(255, 255, 255);
                border-bottom: 2px solid rgb(255, 255, 255);
            `;
        }

        headerBurgerBars.forEach(elem => {
            elem.style.cssText = `
                background-color: rgb(255, 255, 255);
            `;
        })

        style.innerHTML = `
            ${styleInner}

            .title:before, .title:after{
                border-color: rgba(255, 144, 220, 0.7);
            }
        `

        styleInner = style.innerHTML;

        let i = 0;

        beafs.forEach(elem => {
            let name;

            if (i === 3 || i === 4) {
                name = elem.classList[1];

                style.innerHTML = `
                    ${styleInner}

                    .${name}:before, .${name}:after{
                        opacity: 50%;
                    }
                `

                styleInner = style.innerHTML;
                ++i;
            }
            else {
                name = elem.classList[0];

                style.innerHTML = `
                    ${styleInner}
                    
                    .${name}:before, .${name}:after{
                        opacity: 50%;
                    }
                `

                styleInner = style.innerHTML;
                ++i;
            }
        })

        b3Photos.forEach(elem => {
            elem.style.cssText = `
                border: 4px solid rgb(255, 255, 255);
                border-radius: 14px;
            `;
        })

        footer.style.cssText = `
            background-color: rgba(0, 0, 0, 0.90);
            border-top: 2px solid rgb(255, 255, 255);
        `;
    }
    else if (theme === 'light') {
        body.style.cssText = `
            background-color: rgb(255, 255, 255);
        `;

        style.innerHTML = `
            ::-webkit-scrollbar-track{
                background-color: rgb(255, 255, 255);
                border: 2px solid rgb(0, 0, 0);
                border-top: 0px;
                border-bottom: 0px;
            }
                        
            ::-webkit-scrollbar-thumb{
                background-color: rgba(255, 144, 220, 0.5);
                border: 2px solid rgb(0, 0, 0);
            }
        `;

        let styleInner = style.innerHTML;

        header.style.cssText = `
            background-color: rgba(255, 255, 255, 0.90);
            border-bottom: 2px solid rgb(0, 0, 0);
        `;

        strs.forEach(elem => {
            elem.classList.add("light-text");
        })

        strs.forEach(elem => {
            elem.classList.remove("dark-text");
        })

        if (element.clientWidth <= 769) {
            headerList.style.cssText = `
                background-color: rgba(255, 255, 255, 0.90);
                border-top: 2px solid rgb(0, 0, 0);
                border-bottom: 2px solid rgb(0, 0, 0);
            `;
        }

        headerBurgerBars.forEach(elem => {
            elem.style.cssText = `
                background-color: rgb(0, 0, 0);
            `;
        })

        style.innerHTML = `
            ${styleInner}

            .title:before, .title:after{
                border-color: rgba(255, 144, 220, 0.7);
            }
        `

        styleInner = style.innerHTML;

        let i = 0;

        beafs.forEach(elem => {
            let name;

            if (i === 3 || i === 4) {
                name = elem.classList[1];

                style.innerHTML = `
                    ${styleInner}

                    .${name}:before, .${name}:after{
                        opacity: 40%;
                    }
                `

                styleInner = style.innerHTML;
                ++i;
            }
            else {
                name = elem.classList[0];

                style.innerHTML = `
                    ${styleInner}
                    
                    .${name}:before, .${name}:after{
                        opacity: 40%;
                    }
                `

                styleInner = style.innerHTML;
                ++i;
            }
        })

        b3Photos.forEach(elem => {
            elem.style.cssText = `
                border: 4px solid rgb(0, 0, 0);
                border-radius: 14px;
            `;
        })

        footer.style.cssText = `
            background-color: rgba(255, 255, 255, 0.90);
            border-top: 2px solid rgb(0, 0, 0);
        `;
    }
}

headerTheme.addEventListener("click", () => {
    if (headerTheme.classList.contains('light')) {
        headerTheme.innerHTML = `<img class="header__switch" src="img/theme2.png" alt="theme">`;
        changeTheme('dark');
        headerTheme.classList.remove('light');
        headerTheme.classList.add('dark');
    }
    else if (headerTheme.classList.contains('dark')) {
        headerTheme.innerHTML = `<img class="header__switch" src="img/theme1.png" alt="theme">`;
        changeTheme('light');
        headerTheme.classList.remove('dark');
        headerTheme.classList.add('light');
    }
})

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("b-active");
    headerBurger.classList.toggle("b-not-active");
    headerList.classList.toggle("hl-active");
    headerList.classList.toggle("hl-not-active");
    headerBurgerBars.forEach(el => {
        el.classList.toggle("bb-active");
        el.classList.toggle("bb-not-active");
    })
})

headerItems.forEach(elem => {
    elem.addEventListener("click", () => {
        headerBurger.classList.remove("b-active");
        headerBurger.classList.add("b-not-active");
        headerList.classList.remove("hl-active");
        headerList.classList.add("hl-not-active");
        headerBurgerBars.forEach(el => {
            el.classList.remove("bb-active");
            el.classList.add("bb-not-active");
        })
    })
})