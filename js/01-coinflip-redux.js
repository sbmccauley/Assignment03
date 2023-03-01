alert('Let\'s flip a coin..');
let coinFlip;
let numberOfPlays = prompt('How many times would you like to play?');

for (let i=1; i<=numberOfPlays; i++) {
    coinFlip = Math.round(Math.random());
    if(!coinFlip) { 
        console.log('Heads');
    } else {
        console.log('Tails');
    }
}