function detectBrowser() {
    let userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.indexOf("chrome") != -1 &&
        navigator.vendor.indexOf("Google Inc") != -1) {
        alert("구글 Chrome 브라우저입니다.");
    } else {
        alert("구글 Chrome 브라우저가 아닙니다.")
    }
}