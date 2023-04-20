function arrangeCards(deck) {
    deck.forEach(e => {

        let card = document.createElement("div");
        card.className = "cards";

        let img = document.createElement("img");
        img.src = "/images/" + e.SUIT + "/" + e.RANK + ".png";
        img.className = "card-img";


        card.appendChild(img);
        let suit = document.getElementById(e.SUIT + "-CARDS");
        // console.log(e.SUIT, e.RANK);

        suit.appendChild(card);

    })
}

function sortCards(suit, order) {

    let sortedDeck;
    if (suit == "CLUB") {

        sortedDeck = [
            { "SUIT": "CLUB", "RANK": "TWO" },
            { "SUIT": "CLUB", "RANK": "THREE" },
            { "SUIT": "CLUB", "RANK": "FOUR" },
            { "SUIT": "CLUB", "RANK": "FIVE" },
            { "SUIT": "CLUB", "RANK": "SIX" },
            { "SUIT": "CLUB", "RANK": "SEVEN" },
            { "SUIT": "CLUB", "RANK": "EIGHT" },
            { "SUIT": "CLUB", "RANK": "NINE" },
            { "SUIT": "CLUB", "RANK": "TEN" },
            { "SUIT": "CLUB", "RANK": "JACK" },
            { "SUIT": "CLUB", "RANK": "QUEEN" },
            { "SUIT": "CLUB", "RANK": "KING" },
            { "SUIT": "CLUB", "RANK": "ACE" }
        ]
    }
    else if (suit == "SPADE") {
        sortedDeck = [
            { "SUIT": "SPADE", "RANK": "TWO" },
            { "SUIT": "SPADE", "RANK": "THREE" },
            { "SUIT": "SPADE", "RANK": "FOUR" },
            { "SUIT": "SPADE", "RANK": "FIVE" },
            { "SUIT": "SPADE", "RANK": "SIX" },
            { "SUIT": "SPADE", "RANK": "SEVEN" },
            { "SUIT": "SPADE", "RANK": "EIGHT" },
            { "SUIT": "SPADE", "RANK": "NINE" },
            { "SUIT": "SPADE", "RANK": "TEN" },
            { "SUIT": "SPADE", "RANK": "JACK" },
            { "SUIT": "SPADE", "RANK": "QUEEN" },
            { "SUIT": "SPADE", "RANK": "KING" },
            { "SUIT": "SPADE", "RANK": "ACE" }
        ]
    }
    else if (suit == "HEART") {
        sortedDeck = [
            { "SUIT": "HEART", "RANK": "TWO" },
            { "SUIT": "HEART", "RANK": "THREE" },
            { "SUIT": "HEART", "RANK": "FOUR" },
            { "SUIT": "HEART", "RANK": "FIVE" },
            { "SUIT": "HEART", "RANK": "SIX" },
            { "SUIT": "HEART", "RANK": "SEVEN" },
            { "SUIT": "HEART", "RANK": "EIGHT" },
            { "SUIT": "HEART", "RANK": "NINE" },
            { "SUIT": "HEART", "RANK": "TEN" },
            { "SUIT": "HEART", "RANK": "JACK" },
            { "SUIT": "HEART", "RANK": "QUEEN" },
            { "SUIT": "HEART", "RANK": "KING" },
            { "SUIT": "HEART", "RANK": "ACE" }
        ]
    }
    else if (suit == "DIAMOND") {
        sortedDeck = [
            { "SUIT": "DIAMOND", "RANK": "TWO" },
            { "SUIT": "DIAMOND", "RANK": "THREE" },
            { "SUIT": "DIAMOND", "RANK": "FOUR" },
            { "SUIT": "DIAMOND", "RANK": "FIVE" },
            { "SUIT": "DIAMOND", "RANK": "SIX" },
            { "SUIT": "DIAMOND", "RANK": "SEVEN" },
            { "SUIT": "DIAMOND", "RANK": "EIGHT" },
            { "SUIT": "DIAMOND", "RANK": "NINE" },
            { "SUIT": "DIAMOND", "RANK": "TEN" },
            { "SUIT": "DIAMOND", "RANK": "JACK" },
            { "SUIT": "DIAMOND", "RANK": "QUEEN" },
            { "SUIT": "DIAMOND", "RANK": "KING" },
            { "SUIT": "DIAMOND", "RANK": "ACE" }
        ]
    }

    if (order == "asc")
        sortedDeck;
    else if (order == "desc")
        sortedDeck.reverse();

    document.getElementById(suit + "-CARDS").innerHTML = "";
    arrangeCards(sortedDeck);
}

function shuffle() {

    let container = document.getElementById('allCards');
    let childDivs = container.children;


    for (let i = childDivs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        container.insertBefore(childDivs[i], childDivs[j]);
    }
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'pack-of-cards.json', true);
xhr.onload = function() {
  if(this.status === 200) {
    const cardsData = JSON.parse(this.responseText);
    arrangeCards(cardsData);
  }
}
xhr.send();

