let width = 16
let height = 16
let strip = neopixel.create(DigitalPin.P1, width * height, NeoPixelMode.RGB)
EPXDisplay.powerupclear(strip, 10)
strip.setMatrixWidth(width)
pins.setMatrixWidth(DigitalPin.P1, width)
EPXDisplay.play(strip, EPXAnimations.Weather)
strip.show()
