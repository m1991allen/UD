// DISPLAY: GO-TOP 按鈕 / CONTACT 浮動按鈕
const btn_gotop = document.querySelector('#btn_gotop')
const btn_contact = document.querySelector('#btn_contact')

window.addEventListener('scroll', () => {
    // console.log(window.scrollY)
    if (window.scrollY > 200) {
        btn_gotop.style.opacity = '1'
    } else {
        btn_gotop.style.opacity = '0'
    }
})
btn_gotop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

window.addEventListener('scroll', () => {
    console.log(btn_contact.offsetTop)

    btn_contact.style.top = btn_contact.scrollTooffsetTop0 + 'px'
    setTimeout(() => {
        btn_contact.style.top = 50 + '%'
    }, 500)
})
// DISAPLY: 手機版選單
const btnBurger = document.querySelector('#btnBurger')
const nav = document.querySelector('.navigation')
const navMenu = document.querySelector('.navigation nav')
const navMenu_ul = document.querySelector('.navigation nav ul')

window.addEventListener('resize', () => {
    // console.log(window.innerWidth)
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
        background-color: #2c2b2bdb;
    `
    navMenu_ul.style.cssText = `
        display: block;
    `
})

// SETTING:Swiper Slider
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

// SETTING:Swiper Slider
var swiper = new Swiper('.swiper-clients', {
    slidesPerView: 1,
    grid: {
        rows: 1,
    },
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

// SETTING: data數字遞增
let data_coop = 136 //合作廠商
let data_service = 8 //服務類型
let data_team = 37 //團隊人員
let data_case = 868 //承接案件
let data_start1 = 0,
    data_start2 = 0,
    data_start3 = 0,
    data_start4 = 0

setInterval(() => {
    if (data_start1 != data_coop) {
        data_start1++
        document.querySelector('#data_coop').innerHTML = data_start1
    } else {
        clearInterval()
    }
}, 60)

setInterval(() => {
    if (data_start2 != data_service) {
        data_start2++
        document.querySelector('#data_service').innerHTML = data_start2 + '+'
    } else {
        clearInterval()
    }
}, 800)

setInterval(() => {
    if (data_start3 != data_team) {
        data_start3++
        document.querySelector('#data_team').innerHTML = data_start3 + '+'
    } else {
        clearInterval()
    }
}, 200)

setInterval(() => {
    if (data_start4 != data_case) {
        data_start4++
        document.querySelector('#data_case').innerHTML = data_start4
    } else {
        clearInterval()
    }
}, 10)
