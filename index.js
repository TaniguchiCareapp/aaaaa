const $form = document.getElementById("js-form");
const $form2 = document.getElementById("js-ptsInput");
const $textarea = document.getElementById("js-textarea");
const $button = document.getElementById("js-button");
const $button2 = document.getElementById("js-button2");
const $select = document.getElementById("js-select");
const $customerPts = document.getElementById("js-customerPts");
const $counselorPts = document.getElementById("js-counselorPts");
const $counselorPts2 = document.getElementById("js-counselorPts2");

$form.addEventListener("submit", (e) => {
    e.preventDefault();
});

$button.addEventListener("click", (e) => {
    $customerPts.innerHTML = "お客様消費ポイント：";
    $counselorPts.innerHTML = "購入回数1回以上のお客様からの獲得ポイント：";
    $counselorPts2.innerHTML = "未購入のお客様からの獲得ポイント：";
    let textCount = $textarea.value.replace(/\r?\n/g,"").trim();
    textCount = textCount.length;

    let selectId = $select.selectedIndex;

    let textLen = 10;
    let ptsMag = 1;
    while(textLen <= 300){
        if(textCount > (textLen - 10) && textCount <= textLen){

            let basePts = 0;
            if(selectId === 0){
                basePts = 30;
            }
            if(selectId === 1){
                basePts = 40;
            }
            if(selectId === 2){
                basePts = 60;
            }
            if(selectId === 3){
                basePts = 90;
            }
            if(selectId === 4){
                basePts = 120;
            }
            if(selectId === 5){
                basePts = 150;
            }    

            $customerPts.innerHTML = $customerPts.innerHTML + (basePts * ptsMag) + "pts";
            $counselorPts.innerHTML = $counselorPts.innerHTML + (((basePts * ptsMag)) / 2) + "pts";
            $counselorPts2.innerHTML = $counselorPts2.innerHTML + Math.ceil((((basePts * ptsMag)) / 6)) + "pts";    
        }

        textLen = textLen + 10;
        ptsMag ++;
    }

    if(textCount > 300){
        $customerPts.innerHTML = "お客様消費ポイント：" + "文字数オーバー";
        $counselorPts.innerHTML = "購入回数1回以上のお客様からの獲得ポイント：";
        $counselorPts2.innerHTML = "未購入のお客様からの獲得ポイント：";  
    }
});

$form2.addEventListener("submit", (e) => {
    e.preventDefault();
});

$button2.addEventListener("click", (e) => {
    
});
