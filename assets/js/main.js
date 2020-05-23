let enArr = ['`', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
let arArr = ['ذ', 'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط', 'ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ'];


let txt = ' ';
let size = document.getElementById('size');
let en = document.getElementById('en');
let ar = document.getElementById('ar');

document.getElementById('clear').addEventListener('click', clear)
en.addEventListener('input', typed);
size.addEventListener('change', sizeChange);

function typed(e) {
    if (e.data == null) {
        let txtArr = txt.split('');
        txtArr.pop();
        txt = txtArr.join("");
        ar.value = txt;
        if (en.value.length == 0) {
            txt = "";
            ar.value = txt;
        }
    } else if (enArr.indexOf(e.data) == -1) {
        txt += e.data;
        ar.value = txt;
    } else {
        txt += arArr[enArr.indexOf(e.data)];
        console.log(txt);
        ar.value = txt;
    }
};




function clear() {
    en.value = "";
    txt = "";
    ar.value = "";
}

function sizeChange(e) {
    if (e.target.value > 0) {
        en.style.fontSize = e.target.value + "px";
        ar.style.fontSize = e.target.value + "px";
    }
}