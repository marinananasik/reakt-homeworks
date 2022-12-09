function setInnerText(objID, value) {
    const obj = document.getElementById(objID);

    if(!obj) return false;

    obj.innerText = value;
    return true;
} 