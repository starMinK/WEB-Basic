for (let i = 0; i < 10; i++) {
    let m = Math.random() * 100;
    document.write(m + " ");
    document.write("<br><br>");

    let n = Math.floor(m);
    document.write(n + " ");
    document.write("<br><br>");
}

document.write("random() 실행만....<br><br>");

for (let i = 0; i < 10; i++) {
    let k = Math.random() * 100;
    let g = Math.floor(k);
    document.write(g + " ");

}