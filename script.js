var x = "Hello World!";

console.log(x);


const COL_1 = document.getElementsByClassName("col")[0];
const COL_2 = document.getElementsByClassName("col")[1];
const COL_3 = document.getElementsByClassName("col")[2];
const COL_4 = document.getElementsByClassName("col")[3];
const COL_5 = document.getElementsByClassName("col")[4];
const COL_6 = document.getElementsByClassName("col")[5];
const COL_7 = document.getElementsByClassName("col")[6];
var lastOpenSpot = null;
var player1Turn = true; //toggle to false for player 2 start

console.log("Length: ", COL_3.children.length);

function returnLastOpenSpot(xin){
  let length = xin.children.length;
  for(let x = 0; x < length; x++){
    let test = xin.children[x].classList[1];
    if(test == "selector"){
      console.log("Slot open");
      lastOpenSpot = xin.children[x];
    } else {
      console.log("Slot taken");
    }
  }
  return lastOpenSpot;
}

function dropPiece(xin){
  let whosTurn = null;

  //who's turn?
  (player1Turn) ? whosTurn = "player-1" : whosTurn = "player-2";
  //toggle turn
  (whosTurn == "player-1") ? player1Turn = false : player1Turn = true;

  //find location for piece
  let mySpot = returnLastOpenSpot(xin);

  //update location
  mySpot.className = "circle " + whosTurn;
}

function checkForWin(){

}


COL_3.childElementCount; //returns 5

COL_3.nextElementSibling;
