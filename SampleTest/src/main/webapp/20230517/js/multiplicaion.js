for (let i = 2; i <= 9; i++) {
    document.write("<div>");
    document.write("<h3>" + i + "단</h3>");

    if (i == 5) {
        document.write("<br>");
    }
    for (let j = 1; j <= 9; j++) {
        document.write(i + " X " + j + " = " + j * i + "<br>");
    }
    document.write("</div>");

    if (i == 5) {
        document.write("<br>")
    }
}