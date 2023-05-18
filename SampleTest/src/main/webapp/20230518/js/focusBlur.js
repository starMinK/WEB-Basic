const k = document.getElementById("event");
k.addEventListener("focus" , function(e) {
    if(k.value != "") {
    k.value = "";
}
});
    k.addEventListener("blur", function(e) {
    if(k.value =="") {
    k.value = "이름을 입력하세요";
}
});