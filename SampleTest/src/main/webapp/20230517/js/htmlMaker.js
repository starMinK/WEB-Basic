let win = null;

function showHTML() {
    if (win == null || win.closed) {
        win = window.open("", "outWin", "width = 30, height = 200");

        let textArea = document.getElementById("srcText");
        win.document.open();
        win.document.write(textArea.value);
        win.document.close();
    }
}