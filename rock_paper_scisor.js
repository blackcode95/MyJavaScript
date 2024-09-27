let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getRandomHand() {
    let randomHand = Math.floor(Math.random() * 3)
    return hands[randomHand]
}

console.log(getRandomHand())
