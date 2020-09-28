serial.redirect_to_usb()
for index in range(128):
    pins.i2c_write_number(index, 55, NumberFormat.UINT8_BE, True)
    serial.write_number(index)
    serial.write_string(" = ")
    serial.write_number(pins.i2c_read_number(index, NumberFormat.UINT8_BE, False))
    serial.write_line("")

def on_forever():
    pass
basic.forever(on_forever)
