;(function () {
    //資料
    // menu
    let menu = {
        l_about: `關於 | ABOUT`,
        l_project: `案例 | PROJECT`,
        l_service: `服務 | SERVICE`,
        l_contact: `聯繫 | CONTACT`,
    }
    let menuHTML = `
                    <li>${menu.l_about}</li>
                    <li>${menu.l_project}</li>
                    <li>${menu.l_service}</li>
                    <li>${menu.l_contact}</li>
                `
    // logo
    let logo_src = `/assets/res/主頁/主頁/上方logo.png`
    let logo_text = `UD的LOGO`

    // udmlink
    let udm_src = `javascript:;`
    let udm_text = `索取電子資料`

    //video
    let vid_src = `./assets/res/banner_vid.mp4`

    document.querySelector('.h_logo img').setAttribute('src', logo_src)
    document.querySelector('.h_logo img').setAttribute('alt', logo_text)

    document.querySelector('.menu').innerHTML = menuHTML

    document.querySelector('.h_udm a').setAttribute('href', udm_src)
    document.querySelector('.h_udm a').innerHTML = udm_text

    document.querySelector('video').setAttribute('src', vid_src)
})()
