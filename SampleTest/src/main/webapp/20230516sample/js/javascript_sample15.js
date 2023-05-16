let num = 2;
let time = setInterval(function () {
    document.write('<h1>' + num + '초가 지났습니다.' + '<hr>');
    num += 2;
}, 2000);

setTimeout(function () {
    clearInterval(time);
}, 10500);