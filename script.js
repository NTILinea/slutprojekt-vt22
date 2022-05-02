let btn = document.querySelector(`#reRoll`)
let shownResault = document.querySelector(`#diceResault`)


btn.addEventListener(`click`, () => {
    let diceValue = Math.floor((Math.random() * 6) + 1)
    shownResault.innerText = diceValue
    console.log(diceValue)
})



