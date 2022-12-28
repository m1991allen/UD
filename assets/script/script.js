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

    // video
    let vid_src = `./assets/res/banner_vid.mp4`

    // video icon
    let vid_icons = {
        icon1: `/assets/res/主頁 3/主頁/icon/品牌整合.svg`,
        icon2: `/assets/res/主頁 3/主頁/icon/設計規劃.svg`,
        icon3: `/assets/res/主頁 3/主頁/icon/創意發想.svg`,
        alt1: `品牌整合`,
        alt2: `設計規劃`,
        alt3: `創意發想`,
    }
    let vid_iconsHTML = `
                    <li>
                        <img src="${vid_icons.icon1}" alt="${vid_icons.alt1}" />
                        <p>${vid_icons.alt1}</p>
                    </li>
                    <li>
                        <img src="${vid_icons.icon2}" alt="${vid_icons.alt2}" />
                        <p>${vid_icons.alt2}</p>
                    </li>
                    <li>
                        <img src="${vid_icons.icon3}" alt="${vid_icons.alt3}" />
                        <p>${vid_icons.alt3}</p>
                    </li>
                `

    // intro
    let intro_src = `/assets/res/主頁 2/主頁/年鑑圖片.jpg`
    let intro_title = `2023 UD新年鑑`
    let intro_text = `
        <p>
            方與圓本原設計的基本元素，取-微妙平衡之緻，造-和諧完美之魅，沒有規矩不能成方圓，規矩是方圓之極，兼具左腦和右腦的團隊，方中帶圓的多元設計方式。 
        </p>
        <p>
            描繪的不只是圖像，而是未來的策略和無邊的創意！廣告、網路行銷及設計三方整合是的最大「整合」能力優勢。 我們將為您的品牌找出專屬的DNA，賦予生命，實現您最原始的目標。
        </p>
        <p>
            進行的品牌設計或企業設計創造，問題診斷 / 策略思考 / 廣告方案 / 進行媒體整合，提供完整且全方位的品牌或企業整合設計服務。
        </p>
    `

    document.querySelector('.h_logo img').setAttribute('src', logo_src)
    document.querySelector('.h_logo img').setAttribute('alt', logo_text)

    document.querySelector('.menu').innerHTML = menuHTML

    document.querySelector('.h_udm a').setAttribute('href', udm_src)
    document.querySelector('.h_udm a').innerHTML = udm_text

    document.querySelector('video').setAttribute('src', vid_src)

    document.querySelector('.icon').innerHTML = vid_iconsHTML

    document.querySelector('.i_img img').setAttribute('src', intro_src)
    document.querySelector('.intro h2').innerHTML = intro_title
    document.querySelector('.intro article').innerHTML = intro_text
})()
