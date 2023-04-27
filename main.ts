input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    número_aleatorio = randint(0, 6)
    if (número_aleatorio == 2) {
        basic.showString("SI")
        music.playMelody("D F C A D C5 F C ", 120)
    } else if (número_aleatorio == 1) {
        basic.showString("NO")
        music.playMelody("A F E F D G E F ", 120)
    } else if (número_aleatorio == 3) {
        basic.showString("PROBABLEMENTE")
        music.playMelody("F A G F C E A C5 ", 120)
    } else if (número_aleatorio == 5) {
        basic.showString("JAMÁS")
        music.playMelody("C D E F G A B C5 ", 120)
    } else if (número_aleatorio == 4) {
        basic.showString("NI EN TUS SUEÑOS")
        music.playMelody("A B C D G C5 E A ", 120)
    } else {
        basic.showString("TAL VEZ")
        music.playMelody("E B C5 A B G A F ", 120)
    }
    basic.showNumber(8)
})
let número_aleatorio = 0
basic.showString("Haz una pregunta")
basic.showNumber(8)
