var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage1 = "dice" + randomNumber1 + ".png";
var imgSource1 = "images/" + randomImage1;

var image1 = document.querySelector(".img1");
image1.setAttribute("src" , imgSource1);


 

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "dice" + randomNumber2 + ".png";
var imgSource2 = "images/" + randomImage2;

var image2 = document.querySelector(".img2");
image2.setAttribute("src" , imgSource2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "Player 1 Wins! 🚩&nbsp;🚩";
}

else if(randomNumber2 >  randomNumber1){
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩&nbsp;🚩";

}
else{
    document.querySelector("h2").innerHTML= "Draw !";
}
