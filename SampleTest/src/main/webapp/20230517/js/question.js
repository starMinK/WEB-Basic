function addAnswer(xxx, text) {
    let parent = xxx.parentElement;

    if (xxx != parent.lastElementChild) {
        return;
    }
    let newP = document.createElement("p");
    newP.innerHTML = text;
    parent.appendChild(newP);
}