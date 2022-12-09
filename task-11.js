function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor(type) {
    switch(type.toLowerCase()) {
        case "hex":
            const num1 = ('0' + randomIntFromInterval(0, 255).toString(16)).slice(-2);
            const num2 = ('0' + randomIntFromInterval(0, 255).toString(16)).slice(-2);
            const num3 = ('0' + randomIntFromInterval(0, 255).toString(16)).slice(-2);

            return `#${num1}${num2}${num3}`.toUpperCase();
        
        case "rgb":
            return `rgb(${randomIntFromInterval(0, 255)}, ${randomIntFromInterval(0, 255)}, ${randomIntFromInterval(0, 255)})`;
        
        default:
            return -1;
    }
}