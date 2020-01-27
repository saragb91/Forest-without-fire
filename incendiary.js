class Incendiary {
    constructor(ctx) {
        this._ctx = ctx

        this._gameWidth = window.innerWidth
        this._gameHeight = window.innerHeight

        this._incendiary = new Image()
        this._incendiary.src = "img/piromano.png"

        this._widthPi = 210
        this._heightPi = 220


        this._posXpi = this._gameWidth
        this._posYspi = this._gameHeight - this._heightPi + 10
        this._posYpi = this._gameHeight - this._heightPi + 10

        this._vel = 1
    }

    draw() {
        this._ctx.drawImage(
            this._incendiary,
            this._posXpi,
            this._posYpi,
            this._widthPi,
            this._heightPi,


        )

    }

    move() {
        this._posXpi -= this._vel;


    }
}