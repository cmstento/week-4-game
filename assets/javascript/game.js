function setFinalNumber() {
	finalNumber=randomFinalNumber()
	$(".final-number").text(
		finalNumber)
}

function startGame() {
	resetCounter()
	setGemValues()
	setFinalNumber()
}

var counter= 0
var wins = 0
var losses = 0
var finalNumber = 0

function setGemValues() {
	$(".crystal-button").each(function() {
		$(this).data("value", randomGem

			Number())
	}}
}

function increaseCounter (amount){
	counter= amount + counter
}

function incrementCounter () {
	increaseCounter  (1) 	
}


function resetCounter () {
	counter= 0
}

function randomNumber (number){
	return Math.ceil(Math.random () * number)  
}

function randomGenNumber (){
	return randomNumber (12)
}

function randomFinalNumber () {
	return randomNumber (102) +18
}

function checkGameStatus() {
	if (counter = = finalNumber) {
		wins ++
		startGame()
	} else if (counter > finalNumber) {
		losses ++ 
		startGame()
	}
}

$(".crystal-button").data("value", ())

x = $(".crystal-button").data("value", ())

$(".crystal-button").on("click", function (){
	incrementCounter () 
	$(".counter").text(counter)
})