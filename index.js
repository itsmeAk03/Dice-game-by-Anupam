//for 1st dice img
var randomNumber1=Math.floor(Math.random()*6)+1; //1 to 6 ke beech mei random number 

var randomDiceImage="./images/dice"+randomNumber1+".png"; //src ke link ko hi bana diye isme randomNumber ke saath

var image1 =document.querySelectorAll("img")[0];  //pehla img select kiye
image1.setAttribute("src",randomDiceImage);

//for second dice img
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="./images/dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);


//if player1  wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins 🎉";
}

//if player2 wins
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins 🎉";
}
else{
    document.querySelector("h1").innerHTML="Draw!! 😐";
}