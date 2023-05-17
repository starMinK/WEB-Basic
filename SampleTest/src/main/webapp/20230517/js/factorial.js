let num = prompt("숫자를 입력해 주세요.");
let sum = 1;
let i = 2;

while (i <= num) {
    sum *= i;
    i++;
}
document.write(num + "! = " + sum);