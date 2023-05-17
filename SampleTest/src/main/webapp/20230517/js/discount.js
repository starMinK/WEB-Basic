function discount() {
    let price = document.getElementById("price");
    let discountPercent = document.getElementById("discountPercent");

    let answer = price.value - price.value * (discountPercent.value * 0.01);
    document.write(answer + "원 입니다.");
    document.write("<input type='button' onclick='goBack()'")
}