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
    lifes: 3,
    lifesArr: [],
    incen: [],
    obsArr: [],
    fruitsArr: [],
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

            if (this.framesCont > 100000) this.framesCont = 0;

            this.clearElements();
            this.clearFruits();
            this.clearObstacles();
            this.clearIncendiary();
            this.drawElements();
            this.moveElements();
            this.newFruits();
            this.newObstacles();
            this.secuenceIncendiary();
            this.collisionFruits();
            this.collisionStone();
            this.collisionTree();
            this.collisionIncendiary();


            if (this.lifes == 0) {
                this.gameOver()
            }

            this.framesCont++;
        }, 500 / this.fps);
    },


    drawElements() {

        this.background.draw()
        this.player.draw(this.framesCont)
        //si this.incen es un array lo recorremos para que se pinten los incendiarios de dentro
        this.fruitsArr.forEach(fru => fru.draw());
        this.incen.forEach(inc => inc.draw());
        this.obsArr.forEach(obs => obs.draw());
        this.lifesArr.forEach(nl => nl.draw());
    },

    moveElements() {
        this.background.move();
        this.player.move();
        this.fruitsArr.forEach(fru => fru.move());
        this.incen.forEach(inc => inc.move());
        this.obsArr.forEach(obs => obs.move());
    },

    resetElements() {
        this.background = new Background(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, this.keys)
        this.newLifes()
    },

    newObstacles() {
        let pruebaObstacle = Math.floor(Math.random() * (500 - 30) + 30)
        if (pruebaObstacle % 481 === 0) {
            let newObstacles = new Obstacles(this.ctx, 'img/tree1.png')
            this.obsArr.push(newObstacles)
        }
    },

    secuenceIncendiary() {
        let prueba = Math.floor(Math.random() * (500 - 30) + 30)
        if (prueba % 147 === 0) {
            let newIncen = new Incendiary(this.ctx)

            this.incen.push(newIncen)
        }
    },

    newLifes() {
        let position = 60
        for (let i = 0; i < this.lifes; i++) {

            let life = new Lifes(this.ctx, position)
            this.lifesArr.push(life)
            position += 50
        }
    },

    newFruits() {
        if (this.framesCont % 3000 === 0) {

            this.fruitsArr.push(new Fruits(this.ctx))
        }
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

    clearFruits() {
        this.fruitsArr.forEach((fru, idx3) => {
            if (fru.posXf <= 0) {
                this.fruitsArr.splice(idx3, 1)
            }
        })
    },


    clearElements() {
        this.ctx.clearRect(0, 0, this.wSize.width, this.wSize.height)
    },


    collisionFruits() {
        this.fruitsArr.some(
            (fru, idx3) => {
                if (this.player._posX - 80 + this.player._pWidth >= fru._posXf &&
                    this.player._posY + this.player._pHeight >= fru._posYf &&
                    this.player._posX <= fru._posXf + fru._widthf &&
                    this.player._posY <= fru._posYf + fru._heightf) {
                    this.lifes += 1
                    this.lifesArr = []
                    this.newLifes()
                    this.fruitsArr.splice(idx3, 1)
                    return true
                }
            }
        );
    },

    collisionTree() {
        this.obsArr.some(
            (obs, idx) => {
                if (this.player._posX - 100 + this.player._pWidth >= obs._posXobs &&
                    this.player._posY + this.player._pHeight >= obs._posYobs &&
                    this.player._posX <= obs._posXobs + obs._widthObs - 110) {
                    this.lifes -= 1
                    this.lifesArr = []
                    this.newLifes()
                    this.obsArr.splice(idx, 1)
                    return true
                }
            }
        );
    },

    collisionIncendiary() {
        this.incen.some(
            (inc, idx2) => {
                if (this.player._posX - 60 + this.player._pWidth >= inc._posXpi &&
                    this.player._posY + this.player._pHeight >= inc._posYpi + 25 &&
                    this.player._posX <= inc._posXpi + inc._widthPi - 110) {
                    this.lifes -= 1
                    this.lifesArr = []
                    this.newLifes()
                    this.incen.splice(idx2, 1)
                    return true
                }
            }
        )
    },

    collisionStone() {

        this.player._stones.some(
            (st, idx2) => {
                this.incen.some(
                    (inc, idx) => {
                        if (st._posXst + st._radius >= inc._posXpi + 50 &&
                            st._posYst + st._radius <= inc._posYpi + inc._heightPi &&
                            st._posYst + st._radius >= inc._posYpi &&
                            st._posXst + st._radius <= inc._posXpi + inc._widthPi
                        ) {
                            this.incen.splice(idx, 1)
                            this.player._stones.splice(idx2, 1)
                        }
                    }
                )
            })
    },





    gameOver() {

        clearInterval(this.interval)
        alert("GAME OVER")
    },

};

