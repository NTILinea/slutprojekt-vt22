let btn = document.querySelector(`#reRoll`)
let shownResault = document.querySelector(`#diceResault`)
let step1 = document.querySelector(`#steg1`)
let step2 = document.querySelector(`#steg2`)
let step3 = document.querySelector(`#steg3`)
let step4 = document.querySelector(`#steg4`)
let step5 = document.querySelector(`#steg5`)
let step6 = document.querySelector(`#steg6`)


let amountClickedshower = document.querySelector(`#amountClickedValueShower`)
let amountClicked = 0

let stepAfirm1 = false
let stepAfirm2 = false
let stepAfirm3 = false
let stepAfirm4 = false
let stepAfirm5 = false
let stepAfirm6 = false

//dice
btn.addEventListener(`click`, () => {
    let diceValue = Math.floor((Math.random() * 6) + 1)
    shownResault.innerText = diceValue;
    let dice = document.querySelector('#dice');
    dice.classList = [];
    dice.classList.add(`dot-${diceValue}`);
    console.log(diceValue)

    amountClicked = amountClicked + 1
    amountClickedshower.innerText = `Amount of times clicked: ${amountClicked}`
    console.log(amountClicked)


    if (diceValue === 1) {
        console.log("ya got a 1")
        step1.style.color = "green"
        stepAfirm1 = true  
        
    } else if (stepAfirm1 === true && diceValue === 2) {
        console.log("ya got a 2") 
        step2.style.color = "green"
        stepAfirm2 = true
        
    } else if (stepAfirm2 === true && diceValue === 3) {
        console.log("ya got a 3") 
        step3.style.color = "green"
        stepAfirm3 = true
        
    } else if (stepAfirm3 === true && diceValue === 4) {
        console.log("ya got a 4") 
        step4.style.color = "green"
        stepAfirm4 = true
        
    } else if (stepAfirm4 === true && diceValue === 5) {
        console.log("ya got a 5") 
        step5.style.color = "green"
        stepAfirm5 = true
        
    } else if (stepAfirm5 === true && diceValue === 6) {
        console.log("ya got a 6") 
        step6.style.color = "green"
        stepAfirm6 = true

        setTimeout(() => { alert(`Ya won with: ${amountClicked} clicks!`); }, 10);
 
    } else {
        console.log ("nope")
    }

    
})

//stegen
let stegenGoal = document.querySelector(`#stegenGoal`)
let stegValue1 = document.querySelector(`#steg1`)




