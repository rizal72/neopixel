input.onButtonPressed(Button.A, function on_button_pressed_a() {
    strip.clear()
    EPXDisplay.play(strip, EPXAnimations.Weather)
    strip.show()
    basic.showString("A")
})
function getCustomMapping(col: number = 16, rows: number = 16) {
    let j: number;
    //  generate empty col*rows matrix and fill it with 0
    for (let r = 0; r < rows; r++) {
        matrix.push([])
        for (let c = 0; c < col; c++) {
            matrix[r].push(0)
        }
    }
    //  serial.write_numbers(matrix[r])
    //  Loop through each row and column of the matrix and fill it with an increasing number
    let num = 0
    for (let k = 0; k < rows; k++) {
        if (k % 2 == 0) {
            //  Even-numbered rows
            j = col - 1
            while (j > -1) {
                matrix[k][j] = num
                num += 1
                j += -1
            }
        } else {
            //  Odd-numbered rows
            j = 0
            while (j < rows) {
                matrix[k][j] = num
                num += 1
                j += 1
            }
        }
        
        serial.writeNumbers(matrix[k])
    }
}

let width = 16
let height = 16
let strip : neopixel.Strip = null
let matrix : number[][] = []
getCustomMapping()
strip = neopixel.create(DigitalPin.P1, width * height, NeoPixelMode.RGB)
//  EPXDisplay.powerupclear(strip, 10)
strip.setMatrixWidth(width)
pins.setMatrixWidth(DigitalPin.P1, width)
//  EPXDisplay.play(strip, EPXAnimations.WEATHER)
showX()
basic.showString("A")
function showX() {
    let i = 0
    while (i <= width - 1) {
        strip.setMatrixColor(i, i, neopixel.colors(NeoPixelColors.Red))
        strip.setMatrixColor(width - (i + 1), i, neopixel.colors(NeoPixelColors.Blue))
        i += 1
    }
    strip.show()
}

