// DISPLAY: GO-TOP 按鈕 / CONTACT 浮動按鈕
;(function () {
    const btn_gotop = document.querySelector('#btn_gotop')
    const btn_contact = document.querySelector('#btn_contact')

    window.addEventListener('scroll', () => {
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

    btn_contact.style.top = 50 + '%'
    window.addEventListener('scroll', () => {
        setTimeout(() => {
            btn_contact.style.top = window.scrollY + window.innerHeight / 2 + 'px'
        }, 500)
    })
})()

// DISAPLY: 手機版選單
;(function () {
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
})()

// SETTING: Swiper Slider
;(function () {
    // 首頁 作品集
    let swiper_portfolio = new Swiper('.swiper-portfolio', {
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

    // 首頁 合作客戶
    let swiper_clients = new Swiper('.swiper-clients', {
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
})()
