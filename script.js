// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/05e471c7-51de-41be-a3e2-cc6cab4b8da6/82a0374e41a646d7879fafa871b0e534.jpg?v=1710951495714#";
let cards = [
"https://cdn.glitch.global/05e471c7-51de-41be-a3e2-cc6cab4b8da6/82a0374e41a646d7879fafa871b0e534.jpg?v=1710951495714",
"https://cdn.glitch.global/05e471c7-51de-41be-a3e2-cc6cab4b8da6/92vBdD2b-YBtTSVcGXQ-(edit).jpg?v=1710951499149",
"https://cdn.glitch.global/05e471c7-51de-41be-a3e2-cc6cab4b8da6/1993_Lexus_LS400_left_front_profile2-e1673553926431-600x400-740x480.jpg?v=1710951502828",
"https://cdn.glitch.global/05e471c7-51de-41be-a3e2-cc6cab4b8da6/2020_ford_mustang-shelby-gt500_0a82dfcd-c7db-4448-b8c4-ed17b1ada094-82766.jpg?v=1710951507487",
"https://cdn.glitch.global/05e471c7-51de-41be-a3e2-cc6cab4b8da6/2024-chevrolet-camaro-ss-collectors-edition-1-647e1933c6c20.jpg?v=1710951512043",
"https://cdn.glitch.global/05e471c7-51de-41be-a3e2-cc6cab4b8da6/c63.jpeg?v=1710951517160",
"https://cdn.glitch.global/05e471c7-51de-41be-a3e2-cc6cab4b8da6/images.jpg?v=1710951530083",
"https://cdn.glitch.global/05e471c7-51de-41be-a3e2-cc6cab4b8da6/SRT-Viper-Dodge-Dealer-e1415129794550.jpg?v=1710951533800"





];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("deck has" + cards.length + "cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image:url(" +
                url + card + ")' class='card'>"
            );
        }
    }

    console.log("Now. the deck has" + cards.length + "cards.");
    buttonDouble.style.color = "silver";
};

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
shuffle(cards) ;
    console.log("Im shuffling the cards");
game.innerHTML = "";

    for (let card of cards) {
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" + url + card + ")' class='card'>"
            );
       
    }
};
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});