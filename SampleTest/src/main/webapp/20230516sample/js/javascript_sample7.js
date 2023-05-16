var coffee = prompt("무슨 커피를 드릴까요?");
var price = 0;
	
	switch(coffee) {
		case "espresso": 
		case "에스프레소":
			price = 2000;
			break;
		case "카푸치노":
			price = 3000;
			break;
		case "카페라떼":
			price = 3500;
			break;
		default:
			document.write("팔지 않습니다.");
			break;
		}
	if(price!=0){
		document.write(coffee + "는 " + price + "원 입니다.");
	}