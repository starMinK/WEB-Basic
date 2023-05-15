var x = 100;
function f() {
	var x = 1;
	
	document.write("지역변수 x=" + x);
	document.write("<br>");
	document.write("전역변수 x=" + this.x);
}

f();