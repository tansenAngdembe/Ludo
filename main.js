const elements = document.getElementById("tableId")
// const data = elements.rows.length
const dice = document.getElementById("dice")
let randomOutput = document.getElementById("outPut")
const players = document.getElementById("playerNo")



if(randomOutput.innerText.trim() === ""){
    players.innerText = "Red"
}else{

}









if( randomOutput.innerText.trim() === "") randomOutput.innerText = "Roll it."
dice.addEventListener("click",(val)=>{
   val.preventDefault();
   let randomValue = Math.floor(Math.random() * 6) + 1;
   randomOutput.innerText = randomValue
})



// for(let i =0; i < elements.rows.length;i++){
//     let tableRow = elements.rows[i] ;    
    
//     for(let j =0; j < tableRow.cells.length;j++){
//         let rowData = tableRow.cells[j].innerText
//         let cellsData ={
            
//         }
//        data.push(cellsData)
//     }
// }
// // console.log(data)