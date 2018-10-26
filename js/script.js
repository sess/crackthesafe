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

var numbersCorrect;

$("#verify").click(function(){
    console.log("click");
    let input1 = $("#number1").val();
    let input2 = $("#number2").val();
    let input3= $("#number3").val();
    let input4 = $("#number4").val();
    
    $("#userChoice").text(input1 + input2 + input3 + input4);
    
    if(input1 === randomNumber1 && input2 === randomNumber2 && input3 === randomNumber3 && input4 === randomNumber4){
        $(".safe").attr("src","https://i5.walmartimages.com/asr/07d320d8-cee3-47f9-ad51-c2489c45c95e_3.bdfa1be40700c15b777918d68fbf1e60.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff");
        $("#results").text("Unlocked");
    }else{
        $("#results").text("Locked");    
    }
    
    if (input1 === randomNumber2 || input1 === randomNumber3 ||  input1 === randomNumber4){
        console.log("test1"); 
        $("#number1").css("background-color","orange");
    }else if (input1 != randomNumber1){
        $("#number1").css("background-color","red");
    }
    
    if(input2 === randomNumber1 || input2 === randomNumber3 || input2 === randomNumber4){
        console.log("test2");
        $("#number2").css("background-color","orange");
    }else if(input2 !== randomNumber2){
        $("#number2").css("background-color","red");
    }
    
    if(input3 === randomNumber1 || input3 === randomNumber2 || input3 === randomNumber4){
        console.log("test3"); 
        $("#number3").css("background-color","orange");
    }else if(input3 !== randomNumber3){
        $("#number3").css("background-color","red");
    }
    
    if(input4 === randomNumber1 || input4 === randomNumber2 || input4 === randomNumber3){
        console.log("test4");
        $("#number4").css("background-color","orange");
    }else if(input4 !== randomNumber4){
        $("#number4").css("background-color","red");
    }

    
    /*
    if(input1 === randomNumber1){
        numbersCorrect = numbersCorrect + 1;
        console.log(numbersCorrect);
    }
    
    if(input2 === randomNumber2){
        numbersCorrect = numbersCorrect + 1;
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
    */
});
