serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("")
    serial.writeLine("Scanning I2C addresses")
    for (let index = 0; index <= 127; index++) {
        pins.i2cWriteNumber(
        index,
        0,
        NumberFormat.UInt8BE,
        true
        )
        if (pins.i2cReadNumber(index, NumberFormat.UInt8BE, false) != 0) {
            serial.writeLine("")
            serial.writeValue("Device found on address", index)
        } else {
            serial.writeString(".")
        }
    }
    serial.writeLine("")
    serial.writeLine("Finished!")
})
