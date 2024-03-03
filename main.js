const dice = document.getElementById("dice")
let randomValue = document.getElementById("outPut")
let players = document.getElementById("player")
let points = document.getElementById("point")
let colorValue = document.getElementById("color")



// dice setup  function
const diceFunction = () => {
   let click = 1;
   let valueObj = {
      color: "Red",
      number: 0
   }

   if (randomValue.innerText.trim() === "") randomValue.innerText = "Roll the dice";
   players.innerText = "Red"
   const rollValue = (color) => {
      players.innerText = color
      valueObj.color = color
   }     

   dice.addEventListener("click", (val) => {
      val.preventDefault();
      click += 1;
      if (click > 4) {
         click = 1
      }
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      randomValue.innerText = randomNumber;
      valueObj.number = randomNumber;
      points.innerText = valueObj.number;
      colorValue.innerText = valueObj.color;


  
      switch (click) {
         case 1:
            rollValue("Red")
            break;
         case 2:
            rollValue("Green")
            break;
         case 3:
            rollValue("Blue")
            break;
         case 4:
            rollValue("Yellow")
            break;
      }
   });
}

diceFunction()




