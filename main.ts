input.onButtonPressed(Button.A, function on_button_pressed_a() {
    strip.clear()
    EPXDisplay.play(strip, EPXAnimations.Weather)
    strip.show()
    basic.showString("A")
})
function getCustomMapping(col: number = 16, rows: number = 16) {
    let j: number;
    // generate empty col*rows matrix and fill it with 0
    let matrix : number[][] = []
    for (let r = 0; r < rows; r++) {
        matrix.push([])
        for (let c = 0; c < col; c++) {
            matrix[r].push(0)
        }
    }
    // serial.write_numbers(matrix[r])
    //  Loop through each row and column of the matrix and fill it with an increasing number
    let num = 0
    for (let i = 0; i < rows; i++) {
        if (i % 2 == 0) {
            //  Even-numbered rows
            for (j = col - 1; j > -1; j += -1) {
                matrix[i][j] = num
                num += 1
            }
        } else {
            //  Odd-numbered rows
            for (j = 0; j < rows; j++) {
                matrix[i][j] = num
                num += 1
            }
        }
        
        serial.writeNumbers(matrix[i])
    }
}

let strip : neopixel.Strip = null
let width = 16
let height = 16
getCustomMapping()
strip = neopixel.create(DigitalPin.P1, width * height, NeoPixelMode.RGB)
EPXDisplay.powerupclear(strip, 10)
strip.setMatrixWidth(width)
pins.setMatrixWidth(DigitalPin.P1, width)
EPXDisplay.play(strip, EPXAnimations.Weather)
strip.show()
basic.showString("A")
