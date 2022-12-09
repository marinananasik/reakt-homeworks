for(const obj of document.getElementsByClassName("random-color")) {
    obj.addEventListener("click", () => {
        obj.style.color = getRandomColor("hex");
    });
}