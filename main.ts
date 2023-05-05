let distance = 0
DFRobotMaqueenPlusV2.init()
let head_angle = 90
basic.forever(function () {
    distance = DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    if (distance < 15) {
        head_angle += 10
        if (head_angle > 180) {
            head_angle = 90
        }
    } else if (distance > 60) {
        head_angle += -10
        if (head_angle < 45) {
            head_angle = 90
        }
    }
    pins.servoWritePin(AnalogPin.P1, head_angle)
})
basic.forever(function () {
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 100)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
    basic.pause(1000)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eBackward, 100)
    basic.pause(1100)
})
