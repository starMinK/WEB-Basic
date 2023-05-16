function clac(type) {
	let x = Number(document.calculator.number1.value);
	let y = 0;
	
	if (type == 1){
		y = Math.sin((x * Math.PI));
	}else if(type == 2){
		y = Math.log(x);
	}else if(type == 3) {
		y = Math.sqrt(x);
	}else {
		y = Math.abs(x);
	}
	document.calculator.total.value = y;	
}