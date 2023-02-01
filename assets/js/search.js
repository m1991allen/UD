// DISPLAY: 搜尋分類點擊效果 / SearchBar focus效果
;(function () {
    const selector = document.querySelector('ul.class_main li')
    const selectorAll = document.querySelectorAll('.layout_search_class ul li')
    const searchFocus = document.querySelector('#bar_search')
    const li_subClass = document.querySelector('#li_subclass')
    const ul_li_subClassList = document.querySelector('#ul_li_subclass')

    selector.addEventListener('click', (selector) => {
        selectorAll.forEach((item) => {
            item.className = ''
        })
        selector.target.className = 'active'
    })

    window.addEventListener('click', () => {
        if (searchFocus === document.activeElement) {
            searchFocus.setAttribute('placeholder', '輸入文字')
        } else {
            searchFocus.setAttribute('placeholder', '搜尋作品')
        }
    })

    li_subClass.addEventListener('mouseenter', () => {
        ul_li_subClassList.style.cssText = `
            display: block;
        `
    })
    ul_li_subClassList.addEventListener('mouseout', () => {
        ul_li_subClassList.style.cssText = `
            display: none;
        `
    })
})()
