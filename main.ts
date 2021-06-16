sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    hungryTim.say("yum")
    music.magicWand.play()
    info.changeScoreBy(1)
})
let strawberry: Sprite = null
let fries: Sprite = null
let taco: Sprite = null
let hamburger: Sprite = null
let randomFoodItem = 0
let hungryTim: Sprite = null
info.setScore(0)
info.startCountdown(40)
scene.setBackgroundColor(9)
let girl = sprites.create(img`
    f f f f f f f 2 2 f f f f 2 2 f 
    f f f f f f f 2 2 2 f f 2 2 2 f 
    f f f f f f f 2 2 2 2 2 2 2 2 f 
    f f f d d d d 2 2 2 d d 2 2 2 f 
    f f d d d d d 2 2 2 d d 2 2 2 f 
    f f d d d d d 2 2 d d d d 2 2 f 
    f f d d f f d d d f f d d d f f 
    f f d f d d f d f d d f d d f f 
    f f d d 1 f d d d f 1 d d d f f 
    f a d d 1 f d d d f 1 d d d a f 
    f a d d d d d e d d d d d d a f 
    f a d d d d e e e d d d d d a f 
    f f d d 3 d d d d d 3 d d d f f 
    f f d d d 3 d d d 3 d d d d f f 
    f f d d d d 3 3 3 d d d d d f f 
    f f d d d d d d d d d d d d f f 
    `, SpriteKind.Player)
hungryTim = sprites.create(img`
    . . f . f . f . . f . f . f . . 
    f f f f f f f f f f f f f f f f 
    f d d d d d d d d d d d d d d f 
    f d d f f f f d d f f f f d d f 
    d d d d d d d d d d d d d d d d 
    d d d d d e e d d e e d d d d d 
    d d d d d 1 e d d 1 e d d d d d 
    d d d d d d d d d d d d d d d d 
    . d d d d d d e d d d d d d d . 
    . d d d d d d e d d d d d d d . 
    . d d d d d d e e d d d d d d . 
    . d d d d d d d d d d d d d d . 
    . d d d 2 d d d d d d d 2 d d . 
    . d d d 2 d d d d d d d 2 d d . 
    . d d d d 2 2 2 2 2 2 2 d d d . 
    . . d d d d d d d d d d d d . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(hungryTim)
controller.player2.moveSprite(girl)
hungryTim.setStayInScreen(true)
hungryTim.x = 50
girl.setStayInScreen(true)
girl.x = 100
game.onUpdateInterval(500, function () {
    randomFoodItem = randint(0, 3)
    if (randomFoodItem == 0) {
        hamburger = sprites.createProjectileFromSide(assets.image`burger`, randint(-50, 50), randint(-50, 50))
    } else if (randomFoodItem == 1) {
        taco = sprites.createProjectileFromSide(assets.image`taco`, randint(-50, 50), randint(-50, 50))
    } else if (randomFoodItem == 2) {
        fries = sprites.createProjectileFromSide(assets.image`fries`, randint(-50, 50), randint(-50, 50))
    } else {
        strawberry = sprites.createProjectileFromSide(assets.image`strawberry`, randint(-50, 50), randint(-50, 50))
    }
})
