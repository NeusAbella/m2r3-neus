basic.forever(function () {
    if (input.lightLevel() < 30) {
        basic.clearScreen()
        basic.showIcon(IconNames.Angry)
        soundExpression.sad.playUntilDone()
    } else if (input.lightLevel() >= 30 && input.lightLevel() < 120) {
        basic.clearScreen()
        led.plot(2, 4)
        led.plot(2, 3)
    } else if (input.lightLevel() >= 120 && input.lightLevel() < 210) {
        basic.clearScreen()
        led.plot(2, 4)
        led.plot(2, 3)
        led.plot(2, 2)
        led.plot(2, 1)
    } else {
    	
    }
})
