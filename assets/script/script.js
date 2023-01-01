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
    let logo_src = `./assets/res/主頁/主頁/上方logo.png`
    let logo_src_f = `./assets/res/主頁/主頁/下方logo.png`

    // udmlink
    let udm_src = `javascript:;`
    let udm_text = `索取電子資料`

    // video
    let vid_src = `./assets/res/pexels-affan-tech-8597294.mp4`

    // video icon
    let vid_icons = {
        icon1: `./assets/res/主頁 3/主頁/icon/品牌整合.svg`,
        icon2: `./assets/res/主頁 3/主頁/icon/設計規劃.svg`,
        icon3: `./assets/res/主頁 3/主頁/icon/創意發想.svg`,
        text1: `品牌整合`,
        text2: `設計規劃`,
        text3: `創意發想`,
    }

    // intro
    let intro_src = `./assets/res/主頁 2/主頁/年鑑圖片.jpg`
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
        serviceItem1_src: `./assets/res/主頁 3/主頁/icon/企業識別.svg`,
        serviceItem2_src: `./assets/res/主頁 3/主頁/icon/形象廣告.svg`,
        serviceItem3_src: `./assets/res/主頁 3/主頁/icon/網站設計.svg`,
        serviceItem4_src: `./assets/res/主頁 3/主頁/icon/動畫製作.svg`,
        serviceItem5_src: `./assets/res/主頁 3/主頁/icon/插畫設計.svg`,
        serviceItem6_src: `./assets/res/主頁 3/主頁/icon/平面設計.svg`,
        serviceItem7_src: `./assets/res/主頁 3/主頁/icon/年度企劃.svg`,
        serviceItem8_src: `./assets/res/主頁 3/主頁/icon/行銷企劃.svg`,
    }

    // profolio
    let profolio_title = `-作品案例-`
    let article = [
        `./assets/res/主頁 2/主頁/案例A圖.jpg`,
        `./assets/res/主頁 2/主頁/案例B圖.jpg`,
        `./assets/res/主頁 2/主頁/案例C圖.jpg`,
        `./assets/res/主頁 2/主頁/案例B圖.jpg`,
        `./assets/res/主頁 2/主頁/案例C圖.jpg`,
    ]

    // chief
    let h_title = `UNITE DESIGN `
    let h_subtitle = `Chief Art Director`
    let h_exp = `
        牽猴子影業集團 ／
        Johnnie Walker ／
        蘇格登威士忌 ／ 
        遊戲橋子 ／ 
        帝雅歐集團 ／
        合眾汽車 ／ 
        YAMAHA ／ 
        寶雅 ／ 
        得利乳膠漆
    `
    let reward = [
        `紅點設計BEST OF THE BEST 2022`,
        `創作海報類金獎 2022`,
        `創作海報類鈦金獎 2022`,
        `紅點設計 2020`,
        `墨西哥海報雙年 2020`,
        `墨西哥海報雙年展 2018`,
        `斯洛伐克海報三年展 2018`,
        `黑秀垃圾桶制意 2007`,
        `金蘭醬油包裝 2006`,
        `連鎖產業鏈設計競賽 2005`,
        `黑秀垃圾桶創意 2005`,
    ]

    // process
    let process_title = `-服務流程-`
    let process_icon = [
        `./assets/res/主頁 3/主頁/icon/洽談需求.svg`,
        `./assets/res/主頁 3/主頁/icon/提供報價.svg`,
        `./assets/res/主頁 3/主頁/icon/合約簽訂支付訂金.svg`,
        `./assets/res/主頁 3/主頁/icon/設計執行.svg`,
        `./assets/res/主頁 3/主頁/icon/提案並修正設計.svg`,
        `./assets/res/主頁 3/主頁/icon/完稿確定.svg`,
        `./assets/res/主頁 3/主頁/icon/支付尾款.svg`,
        `./assets/res/主頁 3/主頁/icon/集檔結案.svg`,
    ]

    // collaborate
    let c_title = `-合作客戶-`
    let c_icon = `./assets/res/主頁 2/主頁/客戶 icon.jpg`

    // footer
    let f_icon = [`./assets/res/主頁 2/主頁/FB icon.jpg`, `./assets/res/主頁 2/主頁/Behance icon.jpg`]
    let copyright = `©2022 by UNITE DESIGN`

    //////////////////////////////////////////////////////////////////////////////
    //// setHTML
    let menuHTML = `
        <li>
            <a href="javscript:;"> ${menu.l_about} </a>   
        </li>
        <li>
            <a href="javscript:;"> ${menu.l_project} </a>                  
        </li>
        <li>
            <a href="javscript:;"> ${menu.l_service} </a>                    
        </li>
        <li>
            <a href="javscript:;"> ${menu.l_contact} </a>                      
        </li>
    `

    let vid_iconsHTML = `
        <li>
            <img src="${vid_icons.icon1}" />
            <p>${vid_icons.text1}</p>
        </li>
        <li>
            <img src="${vid_icons.icon2}" />
            <p>${vid_icons.text2}</p>
        </li>
        <li>
            <img src="${vid_icons.icon3}" />
            <p>${vid_icons.text3}</p>
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

    let service_iconHTML = `
        <li>
            <img src="${service_list.serviceItem1_src}">
            <p>${service_list.serviceItem1}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem2_src}">
            <p>${service_list.serviceItem2}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem3_src}">
            <p>${service_list.serviceItem3}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem4_src}">
            <p>${service_list.serviceItem4}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem5_src}">
            <p>${service_list.serviceItem5}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem6_src}">
            <p>${service_list.serviceItem6}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem7_src}">
            <p>${service_list.serviceItem7}</p>
        </li>
        <li>
            <img src="${service_list.serviceItem8_src}">
            <p>${service_list.serviceItem8}</p>
        </li>
    `

    let profolio_articleHTML = `
        <div class="swiper-slide"><img src="${article[0]}" /></div>
        <div class="swiper-slide"><img src="${article[1]}" /></div>
        <div class="swiper-slide"><img src="${article[2]}" /></div>
        <div class="swiper-slide"><img src="${article[3]}" /></div>
                        
    `

    let h_contentHTML = `
        <div>
            <ul>
                <li>${reward[0]}</li>
                <li>${reward[1]}</li>
                <li>${reward[2]}</li>
                <li>${reward[3]}</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>${reward[4]}</li>
                <li>${reward[5]}</li>
                <li>${reward[6]}</li>
                <li>${reward[7]}</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>${reward[8]}</li>
                <li>${reward[9]}</li>
                <li>${reward[10]}</li>
            </ul>
        </div>
    `

    let ud_introHTML = `
        <p>UNITE DESIGN 集結創新人才，為客戶提供品牌設計或企業訓練，包括問題 診斷，戰略思考，視覺識別設計，網站設計，直至空間形象創作計劃等，提供 完整、全面的品牌或企業整合設計服務。</p>
        <p>我們的主要任務和目標是通過我們的設計專業向公眾傳達信息。用視覺說故 事，解決客戶營銷和廣告方面的問題外，我們還希望積極為客戶創造「品牌」 和「廣告價值」。而廣告、網路行銷和設計的三方整合和項目開發是公司最大的整合能力。針對客戶量身定制不同風格的設計呈現，創作「優秀」與「細節」 疊加「產品故事」，除了讓顧客達到商業需求外，還具有藝術審美價值的品牌， 讓設計歷久彌新。</p>
    `

    let process_iconHTML = `
        <li><img src="${process_icon[0]}"></li>
        <li><img src="${process_icon[1]}"></li>
        <li><img src="${process_icon[2]}"></li>
        <li><img src="${process_icon[3]}"></li>
        <li><img src="${process_icon[4]}"></li>
        <li><img src="${process_icon[5]}"></li>
        <li><img src="${process_icon[6]}"></li>
        <li><img src="${process_icon[7]}"></li>

    `

    let footer_iconHTML = `
        <li>
            <a href="javascript:;"><img src="${f_icon[0]}"></a>
        </li>
        <li>
            <a href="javascript:;"><img src="${f_icon[1]}"></a>
        </li>

    `

    document.querySelector('.h_logo img').setAttribute('src', logo_src)
    document.querySelector(`.f_logo img`).setAttribute('src', logo_src_f)

    document.querySelector('.menu').innerHTML = menuHTML
    document.querySelector('.footer .f_menu').innerHTML = menuHTML

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
    document.querySelector(`.service ul`).innerHTML = service_iconHTML

    document.querySelector(`.profolio h2`).innerHTML = profolio_title
    document.querySelector(`.swiper-wrapper`).innerHTML = profolio_articleHTML

    document.querySelector(`.h_content_title h1`).innerHTML = h_title
    document.querySelector(`.h_content_title p`).innerHTML = h_subtitle
    document.querySelector(`.h_content_exp p`).innerHTML = h_exp

    document.querySelector(`.h_content_rewards`).innerHTML = h_contentHTML
    document.querySelector(`.ud_intro`).innerHTML = ud_introHTML

    document.querySelector(`.process h2`).innerHTML = process_title
    document.querySelector(`.process ul`).innerHTML = process_iconHTML

    document.querySelector(`.colla img`).setAttribute('src', c_icon)
    document.querySelector(`.colla h2`).innerHTML = c_title

    document.querySelector(`.footer .menu .f_social`).innerHTML = footer_iconHTML
    document.querySelector(`.footer p`).innerHTML = copyright

    //////////////////////////////////////////////////////////////////////////////
    //js

    window.addEventListener('resize', function () {
        if (window.innerWidth > 700) {
            document.querySelector('header .menu').style.display = 'flex'.

            let mb_menu_turnon = document.querySelector('.h_menu_btn img')
            mb_menu_turnon.addEventListener('click', function () {
                document.querySelector('header .menu').style.display = 'block'
            })
        } else {
            document.querySelector('header .menu').style.display = 'none'
        }

        window.addEventListener('scroll', function () {
            document.querySelector('header .menu').style.display = 'none'
        })
    })

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

    var swiper = new Swiper('.swiper-setting', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 10,
            },

            1024: {
                slidesPerView: 2,
                spaceBetween: 10,
            },

            1300: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        },
    })
})()
