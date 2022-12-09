function generateListOfNumber(from, to) {
    if(from > to) {
        const pObj = document.createElement("p");
        pObj.innerText = "Wrong interval";

        document.body.appendChild(pObj);
        return false;
    }

    const ulObj = document.createElement("ul");

    for(let i = from; i <= to; i++) {
        const liObj = document.createElement("li");
        liObj.innerText = i;

        ulObj.appendChild(liObj);
    }
    
    document.body.appendChild(ulObj);
    return true;
}