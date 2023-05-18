window.onbeforeprint = function (ev) {
    logoDiv = document.getElementById("logoDiv");
    logoDiv.style.display = none;
    logoDiv.style.zIndex = "block";
};

window.onafterprint = hideLogo;

function hideLogo() {
    logoDiv = document.getElementById("logoDiv");
    logoDiv.style.display = none;
    logoDiv.style.zIndex = -1;
}