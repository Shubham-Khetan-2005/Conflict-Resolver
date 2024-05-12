var numberOne = 6; 
var numberTwo = 6; 
var numberThree = 6; 
const refreshButton = document.getElementById("refresh");

refreshButton.addEventListener("click",handleClick);

function handleClick(){
    window.location.reload();
    Roll();
}

function generateRandom()
{

    // run this loop until numberOne is different than numberThree
    do {
        numberOne = Math.floor(Math.random() * 7);
    } while(numberOne === numberThree);

    // run this loop until numberTwo is different than numberThree and numberOne
    do {
        numberTwo = Math.floor(Math.random() * 7);
    } while(numberTwo === numberThree || numberTwo === numberOne);
}

function Roll()
{
    generateRandom();
    if((numberOne == 0))
        numberOne = 6;
    if((numberTwo == 0))
        numberTwo = 6;
    if((numberOne>numberTwo)){
        document.getElementsByClassName("winner")[0].textContent = "Player1 WINS";
    }
    else if((numberOne<numberTwo))
    {
        document.getElementsByClassName("winner")[0].textContent= "Player2 WINS";
    }

    if(numberOne == 1){
        document.getElementById("Dice1").src = "./images/dice1.png"
    }
    if(numberOne == 2){
        document.getElementById("Dice1").src = "./images/dice2.png"
    }
    if(numberOne == 3){
        document.getElementById("Dice1").src = "./images/dice3.png"
    }
    if(numberOne == 4){
        document.getElementById("Dice1").src = "./images/dice4.png"
    }
    if(numberOne == 5){
        document.getElementById("Dice1").src = "./images/dice5.png"
    }
    if(numberOne == 6){
        document.getElementById("Dice1").src = "./images/dice6.png"
    }


    if(numberTwo == 1){
        document.getElementById("Dice2").src = "./images/dice1.png"
    }
    if(numberTwo == 2){
        document.getElementById("Dice2").src = "./images/dice2.png"
    }
    if(numberTwo == 3){
        document.getElementById("Dice2").src = "./images/dice3.png"
    }
    if(numberTwo == 4){
        document.getElementById("Dice2").src = "./images/dice4.png"
    }
    if(numberTwo == 5){
        document.getElementById("Dice2").src = "./images/dice5.png"
    }
    if(numberTwo == 6){
        document.getElementById("Dice2").src = "./images/dice6.png"
    }

}

