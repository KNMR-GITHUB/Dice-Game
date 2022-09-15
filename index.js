var r1 = Math.random()*6;
var randomNumber1 = Math.floor(r1)+1;
document.querySelector(".img1 img").setAttribute("src","images/dice"+randomNumber1+".png");
var r2 = Math.random()*6;
var randomNumber2 = Math.floor(r2)+1;
document.querySelector(".img2 img").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!"
}
else if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="Player 1 Wins!❤️";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins!💙";

}
