;(function () {
    //資料
    // menu
    let menu = {
        l_about: `關於 | ABOUT`,
        l_project: `案例 | PROJECT`,
        l_service: `服務 | SERVICE`,
        l_contact: `聯繫 | CONTACT`,
    }

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
    let intro_landing_text = `馬上索取`
    let intro_landing_href = `javascript:;`

    // data
    let dataStart1 = 0,
        dataStart2 = 0,
        dataStart3 = 0,
        dataStart4 = 0

    let data = {
        dataBuildtime: 2922,
        dataTeamMember: 22,
        dataServices: 8,
        dataCase: 2386,
        dataB_text: `成立時間`,
        dataT_text: `團隊人員`,
        dataS_text: `服務類型`,
        dataC_text: `承接案件`,
    }

    // serveice
    let service_title = `-服務內容-`
    let service_list = {
        serviceItem1: `企業識別`,
        serviceItem2: `形象廣告`,
        serviceItem3: `網站設計`,
        serviceItem4: `動畫製作`,
        serviceItem5: `插畫設計`,
        serviceItem6: `平面設計`,
        serviceItem7: `年度企劃`,
        serviceItem8: `行銷企劃`,
        serviceItem1_src: `/assets/res/主頁 3/主頁/icon/企業識別.svg`,
        serviceItem2_src: `/assets/res/主頁 3/主頁/icon/形象廣告.svg`,
        serviceItem3_src: `/assets/res/主頁 3/主頁/icon/網站設計.svg`,
        serviceItem4_src: `/assets/res/主頁 3/主頁/icon/動畫製作.svg`,
        serviceItem5_src: `/assets/res/主頁 3/主頁/icon/插畫設計.svg`,
        serviceItem6_src: `/assets/res/主頁 3/主頁/icon/平面設計.svg`,
        serviceItem7_src: `/assets/res/主頁 3/主頁/icon/年度企劃.svg`,
        serviceItem8_src: `/assets/res/主頁 3/主頁/icon/行銷企劃.svg`,
    }

    // profolio
    let profolio_title = `-作品案例-`
    // let profolio_article = {
    //     // article1_src
    // }

    //////
    //// setHTML
    let menuHTML = `
                <li>
                    ${menu.l_about}     
                </li>
                <li>
                    ${menu.l_project}                    
                </li>
                <li>
                    ${menu.l_service}                      
                </li>
                <li>
                    ${menu.l_contact}                       
                </li>
            `

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

    let dataHTML = `
                <li>
                    <p id="dataB" class="data_count">${dataStart1}</p>
                    <p>${data.dataB_text}</p>
                </li>
                <li>
                    <p id="dataT" class="data_count">${dataStart2}</p>
                    <p>${data.dataT_text}</p>
                </li>
                <li>
                    <p id="dataS" class="data_count">${dataStart3}</p>
                    <p>${data.dataS_text}</p>
                </li>
                <li>
                    <p id="dataC" class="data_count">${dataStart4}</p>
                    <p>${data.dataC_text}</p>
                </li>
    `

    let service_icon = `
        <li>
            <img src="${service_list.serviceItem1_src}" alt="">
            <p>${service_list.serviceItem1}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem2_src}" alt="">
            <p>${service_list.serviceItem2}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem3_src}" alt="">
            <p>${service_list.serviceItem3}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem4_src}" alt="">
            <p>${service_list.serviceItem4}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem5_src}" alt="">
            <p>${service_list.serviceItem5}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem6_src}" alt="">
            <p>${service_list.serviceItem6}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem7_src}" alt="">
            <p>${service_list.serviceItem7}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem8_src}" alt="">
            <p>${service_list.serviceItem8}</p>
        </li>
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

    document.querySelector(`.i_landing a`).setAttribute('href', intro_landing_href)
    document.querySelector(`.i_landing a`).innerHTML = intro_landing_text

    document.querySelector(`.i_data`).innerHTML = dataHTML

    document.querySelector(`.service h2`).innerHTML = service_title
    document.querySelector(`.service ul`).innerHTML = service_icon

    document.querySelector(`.profolio h2`).innerHTML = profolio_title

    setInterval(function () {
        if (dataStart1 != data.dataBuildtime) {
            dataStart1++
            document.querySelector('#dataB').innerHTML = dataStart1
        } else {
            clearInterval()
        }
    }, 1)
    setInterval(() => {
        if (dataStart2 != data.dataTeamMember) {
            dataStart2++
            document.querySelector('#dataT').innerHTML = dataStart2 + '+'
        } else {
            clearInterval()
        }
    }, 300)
    setInterval(() => {
        if (dataStart3 != data.dataServices) {
            dataStart3++
            document.querySelector('#dataS').innerHTML = dataStart3 + '+'
        } else {
            clearInterval()
        }
    }, 1000)
    setInterval(() => {
        if (dataStart4 != data.dataCase) {
            dataStart4++
            document.querySelector('#dataC').innerHTML = dataStart4
        } else {
            clearInterval()
        }
    }, 5)
})()
