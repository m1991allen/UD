// SETTING: data數字遞增
;(function () {
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
})()
