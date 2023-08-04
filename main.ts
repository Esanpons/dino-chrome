controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Personaje.y == 228) {
        Personaje.vy = -250
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`añadir puntos`, function (sprite, location) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
})
let Arbolitos: Sprite = null
let Personaje: Sprite = null
scene.setBackgroundImage(assets.image`fondo color`)
tiles.setCurrentTilemap(tilemap`fondo`)
Personaje = sprites.create(assets.image`dino`, SpriteKind.Player)
Personaje.ay = 500
tiles.placeOnRandomTile(Personaje, assets.tile`start`)
scene.centerCameraAt(80, 196)
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(2000, function () {
    Arbolitos = sprites.createProjectileFromSide(img`
        ......cc66......
        .....c6576c.....
        ....c677576c....
        ....cc677666....
        ...cc6c6667cc...
        ..6c666777cc6c..
        ..c76666766776..
        ..c6777777776c..
        ..cc67777776cc..
        .c67cc76676676c.
        .c777666667777c.
        .c6777777777766.
        .cc7767776776666
        c676cc6766666776
        c777766666677776
        cc7777777777776c
        .c676777677767c.
        ..cc667666766c..
        ...ccc6c66ccc...
        .....cccccc.....
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `, -60, 0)
    Arbolitos.setPosition(160, 228)
})
