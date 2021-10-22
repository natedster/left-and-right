input.onButtonPressed(Button.A, function () {
    go = 1
})
input.onButtonPressed(Button.B, function () {
    go = 0
    Kitronik_Move_Motor.stop()
})
let direction = 0
let go = 0
go = 0
basic.forever(function () {
    while (go == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        direction = randint(0, 1)
        if (direction == 0) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 50)
        } else {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 50)
        }
        basic.pause(1000)
    }
})
