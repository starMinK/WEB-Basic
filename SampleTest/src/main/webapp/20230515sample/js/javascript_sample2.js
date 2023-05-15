function over(obj) {
	obj.src="../images/apple.png";
}

function out(obj) {
	obj.src="../images/activity.jpg";
}

var ret = prompt("이름을 입력하세요.", "황기태");

if(ret == null) {
	
}else if (ret == ""){
	
}else {
	document.write(ret);
}