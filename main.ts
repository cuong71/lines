input.onButtonPressed(Button.A, function () {
    xStelle += 1
    led.plot(xStelle, yStelle)
})
input.onButtonPressed(Button.B, function () {
    yStelle += 1
    led.plot(xStelle, yStelle)
})
let yStelle = 0
let xStelle = 0
xStelle = 0
yStelle = 0
led.plot(xStelle, yStelle)
