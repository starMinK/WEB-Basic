function change() {
    let span = document.getElementById("mySpan");
    let p = document.getElementById("firstP");
        span.style.color = "green";
        span.style.fontSize = "30px";
        span.style.display = "block";
        span.style.width = "6em";
        span.style.border = "3px";
        span.style.margin = "20px";

    p.innerHTML = "나의 <img src = '../../images/banana.jpeg'>바나나";
}