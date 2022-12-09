const cards = [
    { title: 'title A', imageUrl: 'url', description: 'description - 1' },
    { title: 'title B', imageUrl: 'url', description: 'description - 2' },
    { title: 'title C', imageUrl: 'url', description: 'description - 3' },
    { title: 'title D', imageUrl: 'url', description: 'description - 4' },
   ];

function generateCards(cards) {
    const cardsObj = document.createElement("div");
    cardsObj.className = "cards";

    for(const card of cards) {
        cardsObj.appendChild(buildCard(card));
    }
    document.body.appendChild(cardsObj);
}