function goPress() {
    if (event.keyCode == 13) { //13 == enter키
        goSearch();
    }
}

function goSearch() {
    let search_msg = document.getElementById("search_msg").value;

    if (search_msg === ' ') {
        alert("type something to search");

    document.getElementById("search_msg").focus();
    return false;
}

location.href =
    "https://search.naver.com/search.naver?where=nexearch&sm=top_sly.hst&fbm=1&acr=2&ie=utf8&query=" + search_msg;
}

function goReset() {
    if (document.getElementById("search_msg").value != '') {
        document.getElementById("search_msg").value = '';
    }
}