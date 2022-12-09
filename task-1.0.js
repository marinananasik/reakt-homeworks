const fontFamilies = [
    'Arial', 'Times New Roman',
    'Verdana', 'Brush Script MT',
    'Tahoma', 'Garamond',
   ];

function randomFont() {
    this.style.fontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
}

for(const obj of document.getElementsByClassName("random-font")) {
    obj.addEventListener("click", randomFont);
}