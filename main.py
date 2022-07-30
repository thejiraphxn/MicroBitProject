distance = 0
# if(distance >= 18):
# soundExpression.sad.play_until_done()

def on_forever():
    global distance
    distance = Math.round(pins.analog_read_pin(AnalogPin.P2) / 10)
    serial.write_line("" + str(distance))
    basic.pause(100)
    if distance <= 90:
        pins.servo_write_pin(AnalogPin.P8, 0)
        control.wait_micros(200000)
        pins.servo_write_pin(AnalogPin.P8, 90)
        control.wait_micros(5000000)
        pins.servo_write_pin(AnalogPin.P8, 0)
        control.wait_micros(2000000)
basic.forever(on_forever)
