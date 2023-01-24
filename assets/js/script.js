;(function () {
    // swiper
    //     // 響應
    //     // setInterval(() => {
    //     //     if (dataStart1 != data.dataBuildtime) {
    //     //         dataStart1++
    //     //         document.querySelector('#dataB').innerHTML = dataStart1
    //     //     } else {
    //     //         clearInterval()
    //     //     }
    //     // }, 1)
    //     // setInterval(() => {
    //     //     if (dataStart2 != data.dataTeamMember) {
    //     //         dataStart2++
    //     //         document.querySelector('#dataT').innerHTML = dataStart2 + '+'
    //     //     } else {
    //     //         clearInterval()
    //     //     }
    //     // }, 300)
    //     // setInterval(() => {
    //     //     if (dataStart3 != data.dataServices) {
    //     //         dataStart3++
    //     //         document.querySelector('#dataS').innerHTML = dataStart3 + '+'
    //     //     } else {
    //     //         clearInterval()
    //     //     }
    //     // }, 1000)
    //     // setInterval(() => {
    //     //     if (dataStart4 != data.dataCase) {
    //     //         dataStart4++
    //     //         document.querySelector('#dataC').innerHTML = dataStart4
    //     //     } else {
    //     //         clearInterval()
    //     //     }
    //     // }, 5)
    //     // var swiper = new Swiper('.swiper-setting', {
    //     //     slidesPerView: 1,
    //     //     spaceBetween: 10,
    //     //     pagination: {
    //     //         el: '.swiper-pagination',
    //     //         clickable: true,
    //     //     },
    //     //     breakpoints: {
    //     //         768: {
    //     //             slidesPerView: 1,
    //     //             spaceBetween: 10,
    //     //         },
    //     //         1300: {
    //     //             slidesPerView: 3,
    //     //             spaceBetween: 10,
    //     //         },
    //     //     },
    //     // })
})()

const btnBurger = document.querySelector('#btnBurger')
const nav = document.querySelector('.navigation')
const navMenu = document.querySelector('.navigation nav')
const navMenu_ul = document.querySelector('.navigation nav ul')

window.addEventListener('resize', function () {
    console.log(window.innerWidth)
    if (window.innerWidth > 1024) {
        nav.style.display = 'block'
        navMenu.style.cssText = `
            position: relative;
            background-color: transparent;
        `
        navMenu_ul.style.cssText = `
            display: flex;
        `
    } else {
        nav.style.display = 'none'
    }
})

btnBurger.addEventListener('click', () => {
    nav.style.display == 'block' ? (nav.style.display = 'none') : (nav.style.display = 'block')
    navMenu.style.cssText = `
        display: block; 
        position: absolute;
        right:5%;
        background-color: #2C2B2B;
    `
    navMenu_ul.style.cssText = `
        display: block;
    `
})

var swiper = new Swiper('.swiper-profolio', {
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
