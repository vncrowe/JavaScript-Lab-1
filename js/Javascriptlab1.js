" use strict ";


var display = document.getElementById("display");

//1
function oneTooTen(){
  var output = "*** Output ***</br>";
  for (i = 1; i <= 10; i++){
  	output= output + i + "</br>";
  }
  display.innerHTML = output;
}

//2
function oddNumbers(){
	var output = "*** Output ***</br>";
	for (i = 1; i <= 20; i+=2){
		output= output + i + "</br>";
	}
	display.innerHTML = output;
}

//3
function squareNumbers(){
	var output = "*** Output ***</br>";
	for(i =1; i <= 10; i++){
		output = output + (i * i) + "</br>";
	}
	display.innerHTML = output;
}

//4
function random4(){
	var output = "*** Output ***</br>";
	for(i =1; i < 5; i++){
		output = output + Math.floor(Math.random() * 10) + "</br>";
	}
	display.innerHTML = output;
}

//5
function even(){
	var output = "*** Output ***</br>";
	for(i =2; i < 20; i+=2){
		output = output + i + "</br>";
	}
	display.innerHTML = output;
}

//6
function powersOfTwo(){
	var output = "*** Output ***</br>";
	for(i =1; i <= 8; i++){
		output = output + Math.pow(2,i) + "</br>";
	}
	display.innerHTML = output;
}

//7
function areWeThereYet(){
	var boolean = false;
		while (boolean == false){
			var ask = prompt("Are we there yet?");
			if (ask == "yes"){
				confirm("Good!");
				boolean = true;
		} else {
			prompt("Are we there yet?")
		}
	}
}

//8
function triangle(){
 var output = "*** Output ***</br>";
  for (i = 1; i <= 5; i++){
  	output= output + "</br>";
  	for(j=0; j<i;j++){
  		output = output + "*";
  	}
  }
  display.innerHTML = output;
}

function tableSquare() {
	var output = "*** Output ***<br/>";
	for(i = 1; i <= 4; i++) {
		output= output + "| " + (1 * i) + " | " + (2 * i) + " | " + (3 * i) + " | " + (4 * i) + " |<br/>";
	}
	display.innerHTML = output;
}

function tableSquares() {
	var output = "*** Output ***<br/>";
	for(i = 1; i <= 6; i++) {
		for (j = 1; j <= 6; j++) {
            output= output + "| " + (i * j) + " ";
        }
        output= output + "|<br/>";
	}
	display.innerHTML = output;
}
	

