let numberB = 0
let numberselection = false
let guessing = false
let guessB = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == numberB) {
        radio.sendString("RightGuess")
    } else if (receivedNumber == numberB - 1 || receivedNumber == numberB + 1) {
        radio.sendString("Warm")
    } else if (receivedNumber == numberB - 2 || receivedNumber == numberB + 2) {
        radio.sendString("Lukewarm")
    } else {
        radio.sendString("Cold")
    }
})
input.onButtonPressed(Button.A, function () {
    if (numberselection) {
        numberB += 1
    }
    if (guessing) {
        guessB += 1
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Select") {
        basic.showString("S")
        numberB = 0
        numberselection = true
    } else if (receivedString == "MakeGuess") {
        basic.showString("G")
        guessB = 0
        guessing = true
    } else if (receivedString == "RightGuess") {
        basic.showIcon(IconNames.Happy)
        music.playMelody("C D E F G A B C5 ", 250)
        radio.sendString("GameOver")
    } else if (receivedString == "GameOver") {
        basic.showIcon(IconNames.No)
        guessing = false
    } else if (receivedString == "Warm") {
        basic.showIcon(IconNames.Fabulous)
        radio.sendString("MakeGuess")
    } else if (receivedString == "Lukewarm") {
        basic.showIcon(IconNames.Asleep)
        radio.sendString("MakeGuess")
    } else if (receivedString == "Cold") {
        basic.showIcon(IconNames.Sad)
        radio.sendString("MakeGuess")
    }
})
input.onButtonPressed(Button.B, function () {
    if (numberselection) {
        numberselection = false
        radio.sendString("MakeGuess")
    }
    if (guessing) {
        guessing = false
        radio.sendNumber(guessB)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
