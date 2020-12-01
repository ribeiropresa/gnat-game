// global variables
// find height and width

var height = 0
var width = 0

var lifes = 1
var time =30

var createGnatLevel = 1500

var level = window.location.search
level = level.replace("?", "")

if(level === "normal") {
	createGnatLevel = 1500
} else if(level === "hard") {
	createGnatLevel = 1000
} else if(level === "john_rambo") {
	createGnatLevel = 750
}

function adjustGameScreen() {

	height = window.innerHeight
	width = window.innerWidth

	console.log(width, height)
}

adjustGameScreen()

var chronometer = setInterval(function() {
	
	if(time <= 0) {

		clearInterval(chronometer)
		clearInterval(clearGnat)
		window.location.href = "victory.html"

	} else {

		time -= 1
		// innerHTML is an atribute to insert information in the HTML page
		document.getElementById("chronometer").innerHTML = time
	}
	
}, 1000)

function randomPosition() {

	// remove gnat, if there is one(first time)
	if(document.getElementById("gnat")) {
		document.getElementById("gnat").remove()

		if(lifes > 3) {
			window.location.href = "game_over.html"
		} else {
			document.getElementById("life" + lifes).src = "images/outline_heart.png"
			lifes++
		}	
	}
	
	var positionX = Math.floor(Math.random() * width) - 90
	var positionY = Math.floor(Math.random() * height) - 90

	// avoid position image out of the screen
	positionX = positionX < 0 ? 0 : positionX
	positionY = positionY < 0 ? 0 : positionY

	console.log(positionX, positionY)

	// create the HTML element
	var gnat = document.createElement('img')
	gnat.src = "images/gnat.png"
	gnat.className = randomSize() + " " + sideRandom()
	gnat.style.left = positionX + 'px'
	gnat.style.top = positionY + 'px'
	gnat.style.position = 'absolute'
	gnat.id = "gnat"
	gnat.onclick = function() {
		this.remove()
	}

	document.body.appendChild(gnat)
}

function randomSize() {

	var gnatClass = Math.floor(Math.random() * 3)

	// return avoids the use of break
	switch(gnatClass) {

		case 0:
			return "gnat0"
		case 1:
			return "gnat1"
		case 2:
			return "gnat2"
	}
}

function sideRandom() {

	var gnatClass = Math.floor(Math.random() * 2)

	// return avoids the use of break
	switch(gnatClass) {

		case 0:
			return "sideA"
		case 1:
			return "sideB"
	}
}
