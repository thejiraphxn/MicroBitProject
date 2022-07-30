let distance = 0
// if(distance >= 18):
// soundExpression.sad.play_until_done()
basic.forever(function () {
    distance = Math.round(pins.analogReadPin(AnalogPin.P2) / 10)
    serial.writeLine("" + distance)
    basic.pause(100)
    pins.analogWritePin(AnalogPin.P8, 0)
    if (distance <= 90) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        pins.servoWritePin(AnalogPin.P8, 0)
        control.waitMicros(200000)
        pins.servoWritePin(AnalogPin.P8, 90)
        control.waitMicros(5000000)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        pins.servoWritePin(AnalogPin.P8, 60)
        control.waitMicros(500000)
        pins.servoWritePin(AnalogPin.P8, 0)
        control.waitMicros(2000000)
    }
    if (distance <= 90) {
        pins.analogWritePin(AnalogPin.P8, 503)
    }
})
