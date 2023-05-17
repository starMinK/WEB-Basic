function Student(name, score) {
    this.univ = "한국대학";
    this.name = name;
    this.score = score;
    this.getGrade = function () {
        if (this.score > 80) {
            return "A";
        }else if (this.score > 60) {
            return "B";
        } else {
            return "C";
        }
    };
}

let kitae = new Student("황기태", 99);
let jaemoon = new Student("이재문", 80);
document.write(kitae.univ + ", " + kitae.name + "의 학점은 " + kitae.getGrade() + "<br>");
document.write(jaemoon.univ + ", " + jaemoon.name + "의 학점은 " + jaemoon.getGrade() + "<br>");