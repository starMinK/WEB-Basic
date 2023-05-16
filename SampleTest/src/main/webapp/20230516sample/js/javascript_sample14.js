function star(n) {
    let m = parseInt(n);
    if (isNaN(m)) {
        alert("숫자만 입력할 수 있습니다.");
        return;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
}

let n = prompt("별의 갯수를 입력하세요.");
star(n);