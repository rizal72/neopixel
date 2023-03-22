def on_button_pressed_a():
    strip.clear()
    EPXDisplay.play(strip, EPXAnimations.WEATHER)
    strip.show()
    basic.show_string("A")
input.on_button_pressed(Button.A, on_button_pressed_a)

def getCustomMapping(col: number = 16, rows: number = 16):
    # generate empty col*rows matrix and fill it with 0
    for r in range(rows):
        matrix.append([])
        for c in range(col):
            matrix[r].append(0)
    # serial.write_numbers(matrix[r])
    # Loop through each row and column of the matrix and fill it with an increasing number
    num = 0
    for k in range(rows):
        if k % 2 == 0:
            # Even-numbered rows
            j = col - 1
            while j > -1:
                matrix[k][j] = num
                num += 1
                j += -1
        else:
            # Odd-numbered rows
            j = 0
            while j < rows:
                matrix[k][j] = num
                num += 1
                j += 1
        serial.write_numbers(matrix[k])
width = 16
height = 16
strip: neopixel.Strip = None
matrix: List[List[number]] = []
getCustomMapping()
strip = neopixel.create(DigitalPin.P1, width * height, NeoPixelMode.RGB)
# EPXDisplay.powerupclear(strip, 10)
strip.set_matrix_width(width)
pins.set_matrix_width(DigitalPin.P1, width)
# EPXDisplay.play(strip, EPXAnimations.WEATHER)
showX()
basic.show_string("A")

def showX():
    i=0
    while i <= width - 1:
        strip.set_matrix_color(i, i, neopixel.colors(NeoPixelColors.RED))
        strip.set_matrix_color(width - (i + 1), i, neopixel.colors(NeoPixelColors.BLUE))
        i+=1
    strip.show()