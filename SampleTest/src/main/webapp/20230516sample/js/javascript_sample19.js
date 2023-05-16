let array = new Array(10)
let max = 0;
let min = 1000;
for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(Math.random()*1000+1);
    document.write((i+1) + ". " + array[i] + "<br>");
    if (array[i] > max) {
        max = array[i];
    }
    if (array[i] < min) {
        min = array[i];
    }
}
document.write("가장 큰 값: " + max + "<br>");
document.write("가장 작은 값: " + min);