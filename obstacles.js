class Obstacles {
    constructor(ctx, url) {
        this._ctx = ctx
        this._posXobs = 800
        this._posYobs = 570

        this._gameWidthObs = window.innerWidth
        this._gameHeight = window.innerHeight

        this._obstacles = new Image()
        this._obstacles.src = url

        this._widthObs = 100
        this._heightObs = 50

        this._velObs = 1
    }

    draw() {
        this._ctx.drawImage(
            this._obstacles,
            this._posXobs,
            this._posYobs,
            this._widthObs,
            this._heightObs,
        )
    }
    move() {
        this._posXobs -= this._velObs;
    }

    // removeObstacle() {

    //     this._stones.push(new Stone(this._ctx, this._pWidth, this._pHeight, this._vel));

    //     console.log(this._stones)

    //     if (this._stones.length === 15) {
    //         this._stones = []

    //     }
    // }


}
