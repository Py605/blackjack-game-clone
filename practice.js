var sum = 21;
var card = []; 
var hasBlackjack = false;
var isAlive = true;
var message = "";
var points = 125;

function startGame(){
// check weather the user has used his previous chance fully...
    if(sum < 21){
      document.getElementById("result").innerText = "You got some chances left from previous chance, go use them!!";
      return;
    }
    var cardEl = "Cards : ";
  if(points <= 0){
    document.getElementById('card').innerText = cardEl;
    document.getElementById('sum').innerText = "Sum : "; 
    document.getElementById("result").innerText = "You are out of chips, you can't play furthur matches, Go Home!!";
    return;
  }
  points = points - 25;
  document.getElementById("chips").innerText = "Per $"+points;

  isAlive = true;
  hasBlackjack = false;
  card.length = 0;  
  card.push(parseInt(Math.random() * 10) + 2);
  card.push(parseInt(Math.random() * 10) + 2);

  sum = 0;

  for(let i = 0; i < card.length; i++){
    cardEl += card[i]+ "  ";
    sum += card[i];
  }


  if(sum === 21){
    message = ("Wooh! you got a Blackjack");
    hasBlackjack = true;
    points += 50;
    document.getElementById("chips").innerText = "Per $"+points;
  }
  else if(sum < 21){
    message = ("Do you want to draw a new Card");
  }
  else{
    isAlive = false;
    message = "You are out of the game";
  }

    document.getElementById('card').innerText = cardEl;
    document.getElementById('sum').innerText = "Sum : "+ sum;  
    document.getElementById('result').innerText = message;
  
}

function newCard()
{
  if(card.length == 0 || hasBlackjack || !isAlive ){
    document.getElementById("result").innerText = "Start a new game!!"
    return;
  }


  card.push(parseInt(Math.random() * 10) + 2);
  var cardEl = "Card : ";
  sum = 0;
  for(let i = 0; i < card.length; i++){
    cardEl += card[i]+ "  ";
    sum += card[i];
  }


  if(sum === 21){
    message = ("Wooh! you got a Blackjack");
    points += 50;
    hasBlackjack = true;
    document.getElementById("chips").innerText = "Per $"+points;
  }
  else if(sum < 21){
    message = ("Do you want to draw a new Card");
  }
  else{
    isAlive = false;
    message = "You are out of the game";
  }
    document.getElementById('card').innerText = cardEl;
    document.getElementById('result').innerText = message;
    document.getElementById('sum').innerText = "Sum : "+ sum;  

}