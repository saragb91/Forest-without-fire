const game = {
    name: 'A day in the forest',
    description: 'Game to avoid obstacles and jump for get food for increse life',
    author: 'Sara Garzón',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    framesCont: 0,
    fps: 60,
    ctx: undefined,
    frames: 0,
    obstacleImg: undefined,
    incen: [],
    obsArr: [],
    wSize: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    keys: {
        top: 87,
        shoot: 68
    },

    init() {
        this.canvasDom = document.getElementById("canvasDom");
        this.ctx = this.canvasDom.getContext("2d");
        this.canvasDom.width = this.wSize.width;
        this.canvasDom.height = this.wSize.height;
        this.start()
    },

    start() {
        this.resetElements();
        this.interval = setInterval(() => {

            // if (this.framesCont % 300 === 0) {
            //}

            if (this.framesCont > 1000) this.framesCont = 0;


            this.clearElements();
            this.drawElements();
            this.moveElements();
            this.newObstacles();
            this.secuenceIncendiary();
            this.clearObstacles();
            this.clearIncendiary();
            this.collisionStone();
            // if (this.collisionStone()) {

            //     this.dissapearIncendiary()
            // }

            if (this.collisionTree() || this.collisionIncendiary()) {
                this.gameOver() && this.printGameOver()
            }

            this.framesCont++;
        }, 500 / this.fps);
    },

    drawElements() {

        this.background.draw()
        this.player.draw(this.framesCont)
        //si this.incen es un array lo recorremos para que se pinten los incendiarios de dentro
        this.incen.forEach(inc => inc.draw());
        this.obsArr.forEach(obs => obs.draw());
        //this.gameOver.draw()

    },
    moveElements() {
        this.background.move()
        this.player.move()
        this.incen.forEach(inc => inc.move());
        this.obsArr.forEach(obs => obs.move());


    },

    resetElements() {
        this.background = new Background(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, this.keys)
        // this.incen.push(new Incendiary(this.ctx))


    },

    newObstacles() {



        if (this.framesCont % 1000 == 0) {
            console.log(this.obsArr);
            this.obsArr.push(new Obstacles(this.ctx, 'img/tree1.png'))
        }


        //     // let posX = Math.floor(Math.random() * (wSize.width - 1) + 1);
        //     // this.obstacles = new Obstacles(this.ctx, posX, this.url = 'img/tree1.png')
        // }
    },

    clearObstacles() {

        if (this.obsArr.length === 15) {
            this._obsArr = []

        }
    },

    clearIncendiary() {


        this.incen.forEach((inc, idx) => {

            if (inc.posXpi <= 0) {
                this.incen.splice(idx, 1)
            }
        })
    },


    clearElements() {
        this.ctx.clearRect(0, 0, this.wSize.width, this.wSize.height)
    },

    secuenceIncendiary() {
        let prueba = Math.floor(Math.random() * (500 - 30) + 30)
        if (prueba % 50 === 0) {
            let newIncen = new Incendiary(this.ctx)
            console.log(this.incen);
            this.incen.push(newIncen)
        }

    },


    collisionTree() {

        // let plaX = this.player.posX
        // let plaX2 = this.player.posX + 200;
        // let plaY2 = this.player.posY + 160;

        // let obsX = this.obstacles.posXobs
        // //let obsX2 = this.obstacles.posXobs + 100;
        // let obsY = this.obsArr[].posYobs;
        // let obsY2 = this.obsArr[].posXobs + 50

        return this.obsArr.some(
            obs =>
                this.player._posX - 100 + this.player._pWidth >= obs._posXobs &&
                this.player._posY + this.player._pHeight >= obs._posYobs &&
                this.player._posX <= obs._posXobs + obs._widthObs - 110


        );


    },
    collisionIncendiary() {
        return this.incen.some(
            inc =>
                this.player._posX - 60 + this.player._pWidth >= inc._posXpi &&
                this.player._posY + this.player._pHeight >= inc._posYpi + 25 &&
                this.player._posX <= inc._posXpi + inc._widthPi - 110
        )
    },

    collisionStone() {
        // return this.player._stones.some(
        //     st => this.incen.some(
        //         inc =>
        //             st._posXst >= inc._posXpi + 50 &&
        //             st._posYst >= inc._posYpi
        //     ))
        //     // this.incen.splice(0, 1)
        this.player._stones.some(
            (st, idx2) => {
                this.incen.some(
                    (inc, idx) => {
                        if (st._posXst + st._radius >= inc._posXpi + 50 &&
                            st._posYst + st._radius <= inc._posYpi + inc._heightPi &&
                            st._posYst + st._radius >= inc._posYpi &&
                            st._posXst + st._radius <= inc._posXpi + inc._widthPi
                        ) {
                            console.log("choco", this.incen[idx], this.player._stones[idx2])
                            this.incen.splice(idx, 1)
                            this.player._stones.splice(idx2, 1)
                        }
                    }
                )
            })
    },


    // dissapearIncendiary() {
    //     // this.incen.splice(0, 1)
    //     this.player._stones.some(
    //         st => this.incen.some(
    //             (inc, idx) => {
    //                 if (st._posXst >= inc._posXpi + 50 &&
    //                     st._posYst >= inc._posYpi)
    //                     this.incen.splice(idx, 1)
    //             }
    //         ))

    // },
    // dissapearStone() {
    //     this.player._stones.splice(0, 1)

    // },
    gameOver() {

        clearInterval(this.interval)
        alert("GAME OVER")


    },
    // printGameOver() {

    //     this.gameOver = new GameOver(ctx)
    // }
};

