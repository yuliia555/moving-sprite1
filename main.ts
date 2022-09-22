input.onButtonPressed(Button.A, function () {
    sprite.delete()
    sprite = game.createSprite(3, 3)
    sprite.turn(Direction.Left, 90)
    for (let index = 0; index <= 3; index++) {
        sprite.move(1)
        basic.pause(200)
        sprite.move(1)
        basic.pause(200)
        sprite.turn(Direction.Left, 90)
    }
    sprite.turn(Direction.Right, 135)
    basic.pause(200)
    sprite.move(1)
    basic.pause(200)
    sprite.turn(Direction.Left, 90)
    for (let index = 0; index <= 3; index++) {
        sprite.move(1)
        basic.pause(200)
        sprite.move(1)
        basic.pause(200)
        sprite.move(1)
        basic.pause(200)
        sprite.move(1)
        basic.pause(200)
        sprite.turn(Direction.Left, 90)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(3, 3)
