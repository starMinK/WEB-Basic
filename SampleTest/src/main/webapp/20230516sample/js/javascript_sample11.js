let su1 = 0, su2 = 0, addsum=0;

function adder(su1, su2) {
    let sum = 0;
    sum = su1 + su2;
    return sum;
}

let n = prompt("0보다 큰 정수를 입력하세요", 0);
su1 = parseInt(n);

let m = prompt("0보다 큰 정수를 입력하세요", 0);
su2 = parseInt(m);

addsum = adder(su1, su2);

document.write("합은 " + addsum);