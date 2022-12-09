const card = {
    title: "Title 1",
    imageUrl: "Some url",
    description: "Eu ut non sint ullamco minim anim laboris sit nulla."
   };
   
function buildCard(card) {
    const cardObj = document.createElement("div");
    const h4Obj   = document.createElement("h4");
    const brObj   = document.createElement("br");
    const imgObj  = document.createElement("img");
    const pObj    = document.createElement("p");

    cardObj.className = "card";
    h4Obj.innerText   = card.title;
    imgObj.src        = card.imageUrl;
    imgObj.alt        = "alternative text was not provided";
    pObj.innerText    = card.description;

    cardObj.appendChild(h4Obj);
    cardObj.appendChild(brObj);
    cardObj.appendChild(imgObj);
    cardObj.appendChild(pObj);

    return cardObj;
}

function generateCard(card) {
    document.body.appendChild(buildCard(card));
}