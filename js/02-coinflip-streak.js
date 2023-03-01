let coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if(!coinFlip) {
        console.log(`${coinFlip} = Heads `);
    } else {
        console.log(`${coinFlip} = Tails `);
    }
} while(!coinFlip);