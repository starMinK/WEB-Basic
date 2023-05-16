let any = new Array(4);
any[0] = 0;
any[1] = 5.5;
any[2] ="이미지 벡터";
date = new Date();
any[3] = date;

let sum = 0;
for (let i = 0; i < any.length; i++) {
    document.write("any[" + i + "] = " + any[i] + "<br>")
}