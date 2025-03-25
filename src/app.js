import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  const iconsCard = ["♦", "♣", "♥", "♠"];
  const numberCard = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

  // Function to generate a random string from an array
  const pickRandom = (arr) => { return Math.floor(Math.random()*arr.length);}

  // Variables which contains the random string generated
  const randomIcon = iconsCard[pickRandom(iconsCard)];
  const randomNumber = numberCard[pickRandom(numberCard)];

  // Generates a concatenated string of the combination of the random arrays above
  const createCard = randomIcon+randomNumber+randomIcon

  // Function with condition to set the color of text depending on the array concatenated above
  let createIcon = (arr) => {
    
    if (arr == "♦" || arr == "♥"){
      arr = document.getElementById("iconUp").classList.replace("defaultColor","redColor");
      arr = document.getElementById("iconDown").classList.replace("defaultColor","redColor");
    }
    return randomIcon;
  };

  // Sync with HTML file
  document.getElementById("iconUp").innerHTML = createIcon(createCard);
  document.getElementById("iconDown").innerText = createIcon(randomIcon);
  document.getElementById("number").innerHTML = randomNumber;
};