const dice = document.getElementById("dice")
let randomValue = document.getElementById("outPut")
let players = document.getElementById("player")


let diceObj ={
   1 : "Red",
   2 : "Green",
   3 : "blue",
   4 : "white"
};
let click = 0;

// dice setup  function
const diceFunction = ()=>{
    if(randomValue.innerText.trim() === "") randomValue.innerText = "Roll the dice";
    if(players.innerText.trim() === "" ) {
    }
    dice.addEventListener("click",(val)=>{
        val.preventDefault();
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        randomValue.innerText = randomNumber
   })

}

diceFunction()




