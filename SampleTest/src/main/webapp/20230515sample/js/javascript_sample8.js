function digit8(v) {
	var str = "";
	for(i = 0; i < 8; i++, v<<=1) {
		if(v & 0x80) str += "1";
		else str += "0";
	}
	return str;
}
var x = 10, y = 3;
document.write("<pre>");
document.write("x= " + x + ", y=" + y + "<br>");
document.write("x:        " + digit8(x) + "<br>");
document.write("y:        " + digit8(y) + "<br>");
document.write("<hr>");
document.write("x & y" + digit8(x&y) + "<br>");
document.write("x | y" + digit8(x|y) + "<br>");
document.write("x ^ y" + digit8(x^y) + "<br>");
document.write("~x" + digit8(~x) + "<br>");
document.write("<hr>");
document.write("x << 1 :" + digit8(x<<1) + "(" + (x<<1) + ")<br>");
document.write("x >> 1 :" + digit8(x>>1) + "(" + (x>>1) + ")<br>");
document.write("x >>> 1 :" + digit8(x>>>1) + "(" + (x>>>1) + ")<br>");
document.write("</pre>");


