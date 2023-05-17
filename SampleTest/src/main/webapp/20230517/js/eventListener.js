let p;
function init() {
    p = document.getElementById("p");
    p.onmouseover = function () {
        this.style.backgroundColor = "orchid";
    };
    p.addEventListener("mouseout",
        function (){
            this.style.backgroundColor = "transparent";
        });
}