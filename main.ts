basic.forever(function () {
    serial.writeValue("x", input.lightLevel())
    if (input.lightLevel() > 20) {
        servos.P0.run(50)
    } else {
        servos.P0.stop()
    }
})
