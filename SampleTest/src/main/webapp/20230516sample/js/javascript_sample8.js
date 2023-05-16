document.write("<h2>구구단 테이블</h2>")
document.write("<table border='1' width='50%'>")

for(let i = 1; i <= 9; i++){
	document.write("<tr align='center'>");

	for(let j = 2; j <= 9; j++){
		document.write("<td>" + j + "*" + i + "=" + j*i + "</td>>")
	}
	document.write("</tr>")
}
document.write("</table>")
