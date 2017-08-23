// // var myHeading = document.querySelector('h1');
// // myHeading.textContent = 'ohshitwaddup';

// var favMeme = 'ohshitwaddup';
// if(favMeme === 'ohshitwaddup') {
// 	alert('here come dat boi!') 
// } else {
// 	alert('ohshitwaddup')
// }

// document.querySelector('html').onclick = function() {};
var myImage = document.querySelector('img');
var nameButton = document.querySelector ('nameButton');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var para = document.querySelector('p');
var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var prevResult = document.querySelector('.lastResult');
var overUnder = document.querySelector('.overUnder');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;
var timesPressed = 1;
var paragraph; 


para.addEventListener('click', updateName);

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'data/peach.png') {
		myImage.setAttribute('src', 'data/cutedhruv.jpg');
	} else {
		myImage.setAttribute('src', 'data/peach.png');
	}
}

function pressCount() {
	if(timesPressed < 200) {
	   switch(timesPressed) {
	   	case 1: 
	   		para.textContent = 'You clicked the button ' + timesPressed + " time!";
	   		break;
	   	case 10: 
	   		para.textContent = timesPressed + " presses! Aren't you bored?";
	   		break;
	   	case 50: 
	   		para.textContent = timesPressed + " presses? Get a life!";
	   		break;
	   	default: 
	   		para.textContent ='You clicked the button ' + timesPressed + ' times!';
	   		} } 
	  else {
	  	para.textContent = 'You\'re sad. Press #' + timesPressed;
	  }

   timesPressed++;
  // document.body.appendChild(para);
}

var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length ; i++) {
	buttons[i].addEventListener('click', pressCount);
}

myButton.onclick = function() {
	setUserName();
}

function updateName() {
	var name = prompt('Enter a new name');
	para.textContent = para.textContent + name;
}

function setUserName() {
	if(!localStorage.getItem('name')) {
	  setUserName(); 
	} else {
	  var myName = prompt('Enter your name!');
	  localStorage.setItem('name', myName);
	  myHeading.textContent = "Hey, sexy " + myName;
	}
}

guessSubmit.addEventListener('click', 'checkGuess');

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
 
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
 
  guessCount++;
  guessField.value = '';
  guessField.focus();
}




// function imgChange() {

// }