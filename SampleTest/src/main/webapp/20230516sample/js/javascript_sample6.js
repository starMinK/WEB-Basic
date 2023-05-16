var fruits = prompt("과일을 입력하세요.", "사과");
	var input = prompt("물건을 몇 개 살것인지 입력하세요.", 100);
	var count = parseInt(input);
	
	switch(fruits) {
		case "바나나": 
			price = 200; 
			price *= count;
			document.writeln(fruits + "는 " + price + "입니다.");
			break;
		case "사과":
			price = 300; 
			price *= count;
			document.writeln(fruits + "는 " + price + "입니다.");
			break;
		case "체리":
			price = 400; 
			price *= count;
			document.writeln(fruits + "는 " + price + "입니다.");break;
		default:
			document.write("팔지 않습니다.");
			price = 0;
}