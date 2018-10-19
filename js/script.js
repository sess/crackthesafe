// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION 
var input1;

var input2

var input3;

var input4;

var randomNumber1 = Math.floor(Math.random() * 10);

var randomNumber2 = Math.floor(Math.random() * 10);

var randomNumber3 = Math.floor(Math.random() * 10);

var randomNumber4=  Math.floor(Math.random() * 10);

console.log(randomNumber1);

console.log(randomNumber2);

console.log(randomNumber3);

console.log(randomNumber4);

var numbersCorrect;

$("#verify").click(function(){
    console.log("click");
    input1 = $("#number1").val();
    input2 = $("#number2").val();
    input3= $("#number3").val();
    input4 = $("#number4").val();
    
    $("#userChoice").text(input1 + input2 + input3 + input4);
    
    if(input1 === randomNumber1){
        numbersCorrect = numbersCorrect + 1;
        console.log(numbersCorrect);
    }
    
    if(input2 === randomNumber2){
        numbersCorrect = numbersCorrect + 1
        console.log(numbersCorrect);
    }
    
    if(input3 === randomNumber3){
        numbersCorrect = numbersCorrect + 1;
        console.log(numbersCorrect);
    }
    
    if(input4 === randomNumber4){
        numbersCorrect = numbersCorrect + 1;
        console.log(numbersCorrect);
    }
    
    /*if(input1 === "1" && input2 === "2" && input3 === "3" && input4 === "4"){
        console.log("unlocked");
        $("#results").text("Unlocked");
    }else{
        $("#results").text();
    } */
    
});
