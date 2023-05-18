function Hello() {
    let newwin = window.open("", "", "left=350, top=300, width=200, height=80");
    newwin.document.write("접속에 감사합니다!!!<br>");
    newwin.document.body.style.backgroundColor = "yellow";
    newwin.document.close();
}