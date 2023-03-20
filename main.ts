input.onButtonPressed(Button.A, function () {
    strip.clear()
    EPXDisplay.play(strip, EPXAnimations.Weather)
    strip.show()
    basic.showString("A")
})
let strip: neopixel.Strip = null
let width = 16
let height = 16
strip = neopixel.create(DigitalPin.P1, width * height, NeoPixelMode.RGB)
EPXDisplay.powerupclear(strip, 10)
EPXDisplay.play(strip, EPXAnimations.Weather)
strip.show()
basic.showString("A")
