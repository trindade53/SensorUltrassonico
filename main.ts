let distancia = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(distancia)
})
basic.forever(function () {
    distancia = grove.measureInCentimetersV2(DigitalPin.P2)
    if (distancia < 10) {
        music.play(music.stringPlayable("C D E F G A G F ", 120), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
})
