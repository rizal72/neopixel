def on_button_pressed_a():
    strip.clear()
    EPXDisplay.play(strip, EPXAnimations.WEATHER)
    strip.show()
    basic.show_string("A")
input.on_button_pressed(Button.A, on_button_pressed_a)

def getCustomMapping(col=16,rows=16):
    #generate empty col*rows matrix and fill it with 0
    matrix: List[List[number]] = []
    for r in range(rows):
        matrix.append([])
        for c in range(col):
            matrix[r].append(0)
        #serial.write_numbers(matrix[r])
    
    # Loop through each row and column of the matrix and fill it with an increasing number
    num = 0
    for i in range(rows):
        if i % 2 == 0:  # Even-numbered rows
            for j in range(col-1, -1, -1):
                matrix[i][j] = num
                num += 1
        else:  # Odd-numbered rows
            for j in range(rows):
                matrix[i][j] = num
                num += 1
        serial.write_numbers(matrix[i])

strip: neopixel.Strip = None
width = 16
height = 16
getCustomMapping()
strip = neopixel.create(DigitalPin.P1, width * height, NeoPixelMode.RGB)
EPXDisplay.powerupclear(strip, 10)
strip.set_matrix_width(width)
pins.set_matrix_width(DigitalPin.P1, width)
EPXDisplay.play(strip, EPXAnimations.WEATHER)
strip.show()
basic.show_string("A")