input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showNumber(1)
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
