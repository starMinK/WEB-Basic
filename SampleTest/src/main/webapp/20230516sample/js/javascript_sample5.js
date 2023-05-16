function send(){
let num = Number(test.number1.value);

	if(num < 0){
		document.write(num + "은(는) 음수입니다.");
	}else if(num > 0){
		document.write(num + "은(는) 양수입니다.");
	}else if(num == 0){
		document.write(num + "은(는) 0입니다.");
	}else{
		document.write("숫자만 입력해주세요.")
	}
}