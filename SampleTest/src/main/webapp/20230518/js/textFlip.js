var span = document.getElementById("span");
var timerID = setInterval("doRotate()", 500); // 200 밀리초 주기로 doRotate () 호출
var btnClick = true;

span.onclick = function (e) { // 마우스 클릭 이벤트 리스너

    if (btnClick == false) {
        timerID = setInterval("doRotate()", 500);
        btnClick = true;
    } else if (btnClick == true) {
        clearInterval(timerID);
        btnClick = false;
    }
}

function doRotate() {
    var str = span.innerHTML;
    var firstChar = str.substr(0, 1);
    var remains = str.substr(1, str.length - 1);
    str = remains + firstChar;
    span.innerHTML = str;
}