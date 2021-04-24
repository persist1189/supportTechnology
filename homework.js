const LABEL = {
    'question1': {
        'differentBrowser': '1.不同瀏覽器預設樣式不同，要如何解決？',
        'answer1': 'A1: 使用 * 定義所有初始值<簡易版本>',
        'toggleCode': `點擊顯示程式碼`,
        'answerCode':
        `* {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    line-height: 1;
    list-style : none;
    }`,
        'answer2': `A2: 使用 Reset Css 檔案`
    },
    'question2': {
        'float': `2.如何讓浮動元素垂直置中？`,
        'floatAnswer1': `A: 先設定區域的高度再設定擁有寬與高並賦予背景顏色的圖案<br/>
                         1. 設定 css 屬性，並賦予背景顏色，設定位置為相對位置方便圖片設為絕對位置時不會亂跑，再將 div 區域賦予背景顏色與絕對位置路徑，設定上方與左方的位置，再使用位移的屬性來調整位置<br/>
                         2. 設定 css 屬性，並賦予背景顏色，設定位置為相對位置方便圖片設為絕對位置時不會亂跑，再將 div 區域賦予背景顏色與絕對位置路徑，設定上方與左方的位置，再調整左邊間距與上方間距<br/>
                         3. 使用 flex 與 垂直置中，水平置中來調整位置<br/>
                         Sample 如下：`,
        'floatAnswerCode': 
    `   .cssName {
       display: flex;
       justify-content: center;
       align-items: center;
    }`,
        'floatSample': `Sample:`,
        'floatSample2': `A2`,
    },
    'question3': {
        'embedVideo': `3.如何讓 embed video RWD 時維持 16:9 比例？`,
        'embedVideoAnswer': `
        A: <br/>
        1.先從 Youtube 分享 embed video <br/> 
        2.將寬度以及額外的屬性刪掉 <br/>
        3.在外層加入 class 屬性並在 css 加上相對位置屬性與 padding-bottom 的值<br/>
           - 16:9 -> 9/16 = 0.5625 = 56.25%<br/>
           - 4:3 -> 3/4 = 0.75 = 75%<br/>
           - 3:4 -> 4/3 = 1.33 = 133% <br/>
        4.在 iframe 加上寬與高 100% 的比例<br/>
        Sample: `
    }   
}
document.querySelector('#differentBrowser').innerHTML = LABEL.question1.differentBrowser;
document.querySelector('#answer1').innerHTML = LABEL.question1.answer1;
document.querySelector('#toggleCode').innerHTML = LABEL.question1.toggleCode;
document.querySelector('#answerCode').innerHTML = LABEL.question1.answerCode;
document.querySelector('#answer2').innerHTML = LABEL.question1.answer2;
document.querySelector('#float').innerHTML = LABEL.question2.float;
document.querySelector('#floatAnswer1').innerHTML = LABEL.question2.floatAnswer1;
document.querySelector('#floatAnswerCode').innerHTML = LABEL.question2.floatAnswerCode;
document.querySelector('#embedVideo').innerHTML = LABEL.question3.embedVideo;
document.querySelector('#embedVideoAnswer').innerHTML = LABEL.question3.embedVideoAnswer;

let toggleCode = () => {
    let element = document.querySelector('.code');
    let style = getComputedStyle(element);
    style.display != 'none' ? 
    element.style.display = 'none' : 
    element.style.display= 'block'
}
    