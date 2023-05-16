let sum = 0;

for (let i = 1; i <= 100; i++) {
	if (i % 3 == 0) {
		continue;
	}
		document.write(i + " ");
		sum += i;
}
document.write("합은 " + sum);