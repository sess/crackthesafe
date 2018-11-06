// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION 
var randomNumber1 = Math.floor(Math.random() * 10).toString();

var randomNumber2 = Math.floor(Math.random() * 10).toString();

var randomNumber3 = Math.floor(Math.random() * 10).toString();

var randomNumber4=  Math.floor(Math.random() * 10).toString();

console.log(randomNumber1);

console.log(randomNumber2);

console.log(randomNumber3);

console.log(randomNumber4);

let numbersCorrect = 0;

let numbersInplace = 0;

let guesses = 0;

$("#verify").click(function(){
    console.log("click");
    let numberGuess1 = $("#number1").val();
    let numberGuess2 = $("#number2").val();
    let numberGuess3 = $("#number3").val();
    let numberGuess4 = $("#number4").val();
    
    $("#userChoice").text(numberGuess1 + numberGuess2 + numberGuess3 + numberGuess4);
    
    if (numberGuess1 === randomNumber1){
        $("#number1").css("background-color","green");
        numbersCorrect = numbersCorrect + 1;
        console.log(numbersCorrect);
    }else if((numberGuess1 != randomNumber1) && (numberGuess1 === randomNumber2) || (numberGuess1 === randomNumber3) || (numberGuess1=== randomNumber4))
    {
        $("#number1").css("background-color","orange");
        numbersInplace = numbersInplace + 1;
    }else if(numberGuess1 != randomNumber1){
        $("#number1").css("background-color","red");
        numbersCorrect = numbersCorrect + 0;
        console.log(numbersCorrect);
    }
    
    if(numberGuess2 === randomNumber2){
        $("#number2").css("background-color","green");
        numbersCorrect = numbersCorrect + 1;
        console.log(numbersCorrect);
    }else if(numberGuess2 != randomNumber2 && (numberGuess2 === randomNumber1) || (numberGuess2 === randomNumber3) || (numberGuess2 === randomNumber4))
    {
        $("#number2").css("background-color","orange");    
    }else if(numberGuess2 != randomNumber2){
        $("#number2").css("background-color","red");
        numbersCorrect = numbersCorrect + 0;
        console.log(numbersCorrect);
    }
    
    if(numberGuess3 === randomNumber3){
        $("#number3").css("background-color","green");
        numbersCorrect = numbersCorrect + 1;
        console.log(numbersCorrect);
    }else if(numberGuess3 != randomNumber3 && (numberGuess3 === randomNumber1) || (numberGuess3 === randomNumber2) || (numberGuess3 === randomNumber4))
    {
        $("#number3").css("background-color","orange");
    }else if(numberGuess3 != randomNumber3)
    {
       $("#number3").css("background-color","red"); 
       numbersCorrect = numbersCorrect + 0;
       console.log(numbersCorrect);
    }
    
    if(numberGuess4 === randomNumber4){
        $("#number4").css("background-color","green");
        numbersCorrect = numbersCorrect + 1;
        console.log(numbersCorrect);
    }else if(numberGuess4 != randomNumber4 && (numberGuess4 === randomNumber1) || (numberGuess4 === randomNumber2) || (numberGuess4 ===randomNumber3))
    {
        $("#number4").css("background-color","orange");
    }else if(numberGuess4 != randomNumber4){
        $("#number4").css("background-color","red");
        numbersCorrect = numbersCorrect + 0;
        console.log(numbersCorrect);
    }
    
    if(numbersCorrect === 4){
        $(".safe").attr("src","/images/openedSafe.jpg");
        $("#results").text("unlocked");
    }else{
        $("#results").text("locked");    
    }
    
    numbersCorrect = 0;
    console.log(numbersCorrect);
    
    guesses = guesses + 1;
    
    $("#guesses").text(guesses);
});