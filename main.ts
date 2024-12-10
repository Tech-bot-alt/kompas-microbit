basic.forever(function () {
    if (input.compassHeading() > 0) {
        basic.showString("N")
    }
    if (input.compassHeading() > 90) {
        basic.showString("O")
    }
    if (input.compassHeading() > 180) {
        basic.showString("Z")
    }
    if (input.compassHeading() > -90) {
        basic.showString("W")
    }
})
