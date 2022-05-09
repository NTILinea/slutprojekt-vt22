let btn = document.querySelector(`#reRoll`)
let shownResault = document.querySelector(`#diceResault`)

//dice
btn.addEventListener(`click`, () => {
    let diceValue = Math.floor((Math.random() * 6) + 1)
    shownResault.innerText = diceValue;
    let dice = document.querySelector('#dice');
    dice.classList = [];
    dice.classList.add(`dot-${diceValue}`);
    console.log(diceValue)

    stegenChecker()
})

//stegen
let stegenGoal = document.querySelector(`#stegenGoal`)

function stegenChecker() {

    if (diceValue = 1) {
        console.log("ya got a 1")
    } else {
        console.log("nope")
    }
}



