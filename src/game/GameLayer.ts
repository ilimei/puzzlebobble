import { Sprite } from "Tiny";
import { Bobble, getBobbleSprites } from "./bobbles";
import { Anim, COLOR } from "./constants";
import { Sound } from "./Sound";

export default class GameLayer extends Tiny.Container {

    bobbleSprites = getBobbleSprites();
    arrow: Sprite;
    width: number = 8 * 16 + 7 * 2;
    height = 11 * 16;
    currentShot: Bobble;
    nextShot: Bobble;
    speed: number = 160;
    gameBobble: Bobble[][];
    bobbleList: Bobble[];

    canShot = true;

    constructor() {
        super();
        this.bobbleList = [];
        this.gameBobble = new Array(8).fill(1).map(() => {
            return new Array(16).fill(null);
        })
        this.initUI();
        this.initBobbles();
        this.initArrow();
        this.initEvent();
        // @ts-ignore
        window.Game = this;
    }

    initUI() {
        const bg = Tiny.Sprite.fromImage(Tiny.resources.bgPNG);
        bg.setPosition(-1, -1);

        const bag = Tiny.Sprite.fromFrame('tileset-bag');
        bag.setPosition(0, this.height - 4);

        this.addChild(bg, bag);
    }

    initEvent() {
        this.on('shotend', this.handleShotEnd.bind(this));
        this.on('bobbleadd', this.handleAddBobble.bind(this));
        this.on('bobbleremove', this.handleBobbleRemove.bind(this));
        this.on("win", this.handleWin.bind(this));
        this.on("lose", this.handleLose.bind(this));
    }

    initBobbles() {
        for (let gameY = 0; gameY < 2; gameY++) {
            const maxGameX = gameY % 2 === 1 ? 7 : 8;
            for (let gameX = 0; gameX < maxGameX; gameX++) {
                const color = Math.floor(Math.random() * 8);
                const bobble = this.createBobbles(color);
                const [x, y] = GameLayer.gameXYtoPosition(gameX, gameY);
                bobble.gameX = gameX;
                bobble.gameY = gameY;
                this.gameBobble[gameX][gameY] = bobble;
                this.bobbleList.push(bobble);
                bobble.setPosition(x, y);
                this.addChild(bobble);
            }
        }
    }

    initArrow() {
        const arrow = new Tiny.Sprite(Tiny.Texture.fromFrame('tileset-arrow'));
        arrow.setAnchor(0.5);
        arrow.setPosition(this.width / 2, 160 + 8);
        this.arrow = arrow;

        const shot = this.createBobbles(COLOR.BLUE);
        this.currentShot = shot;
        shot.setPosition(this.width / 2, 160 + 8);

        this.addChild(arrow, shot);
        this.genNext();
    }

    genNext() {
        const colors = this.bobbleList.map(v => v?.color).filter(v => !isNaN(v));
        const nextShot = this.createBobbles(colors[Math.floor(Math.random() * colors.length)]);
        this.nextShot = nextShot;
        nextShot.setPosition(40, this.height + 12);
        this.addChild(this.nextShot);
    }

    setDist(x: number, y: number) {
        const dx = x - this.arrow.getGlobalPosition().x;
        const dy = y - this.arrow.getGlobalPosition().y;
        const radion = Math.atan2(dy, dx) + Math.PI / 2;
        if (this.currentShot) {
            this.currentShot.setRotation(radion);
        }
        this.arrow.setRotation(radion);
    }

    replaceShot(color: number) {
        if (this.currentShot) {
            this.removeChild(this.currentShot);
        }
        const shot = this.createBobbles(color);
        this.currentShot = shot;
        shot.setPosition(this.width / 2, 160 + 8);
        this.addChild(this.currentShot);
    }

    shot(x: number, y: number) {
        if (this.currentShot && this.canShot) {
            const dx = x - this.arrow.getGlobalPosition().x;
            const dy = y - this.arrow.getGlobalPosition().y;
            let radion = Math.atan2(dy, dx) + Math.PI / 2;
            if (radion === 0) {
                radion = 0.001;
            }
            this.arrow.setRotation(radion);
            Sound.getInstance().playShot();

            const shot = this.currentShot;
            this.currentShot = null;
            this.shotMove(shot, radion);
        }
    }

    private shotMove(shot: Bobble, radion: number) {
        const { x, y } = shot.position;
        const distX = radion > 0 ? this.width - 15 : 15;
        const ry = Math.tan(Math.PI / 2 - radion) * (distX - x);
        const distY = y - ry;
        console.info(distX);
        const dist = Math.floor(Math.sqrt(Math.pow(distX - x, 2) + Math.pow(distY - y, 2)));
        const action = Tiny.MoveTo(dist / this.speed * 1000, { x: distX, y: distY });
        action.onUpdate = (tween, object) => {
            // @ts-ignore
            action._onUpdate.call(action, tween, object)
            this.collision(shot, action);
        }
        action.onComplete = () => {
            this.shotMove(shot, -radion);
            console.info('complete');
        }
        shot.runAction(action);
    }

    private collision(shot: Bobble, action: Tiny.Action) {
        let minDist = Number.MAX_VALUE;
        let collisionBobble = null;
        for (let y = 0; y < 16; y++) {
            for (let x = 0; x < 8; x++) {
                if (this.gameBobble[x] && this.gameBobble[x][y]) {
                    const v = this.gameBobble[x][y];
                    const dist = Math.sqrt(Math.pow(v.position.x - shot.position.x, 2) + Math.pow(v.position.y - shot.position.y, 2));
                    if (dist <= 14 && dist < minDist) {
                        minDist = dist;
                        collisionBobble = v;
                    }
                }
            }
        }
        if (!collisionBobble) {
            if (shot.position.y < 15) {
                console.info("collision bar");
                const gameY = 0;
                const gameX = Math.floor((shot.position.x - 7) / 16)
                const [x, y] = GameLayer.gameXYtoPosition(gameX, gameY);
                shot.gameX = gameX;
                shot.gameY = gameY;
                this.gameBobble[gameX][gameY] = shot;
                this.emit('bobbleadd', shot);
                shot.setPosition(x, y);
                shot.setRotation(0);
                action.stop();
                shot.playAction(Anim.SLASH);
                this.shakeBobble(gameX, gameY);
                this.emit('shotend', shot, null);
            }
            return;
        };
        const [gameX, gameY, x, y] = this.getNextPostion(collisionBobble.gameX, collisionBobble.gameY, shot);
        shot.gameX = gameX;
        shot.gameY = gameY;
        this.gameBobble[gameX][gameY] = shot;
        this.emit('bobbleadd', shot);
        shot.setPosition(x, y);
        shot.setRotation(0);
        action.stop();
        shot.playAction(Anim.SLASH);
        this.shakeBobble(gameX, gameY);
        this.emit('shotend', shot, collisionBobble);
    }

    private getNextPostion(startGameX: number, startGameY: number, shot: Bobble) {
        const isOdd = startGameY % 2 === 1;
        const pos = [
            [startGameX - 1, startGameY],
            [startGameX + 1, startGameY],
            [startGameX, startGameY + 1],
            [startGameX, startGameY - 1],
        ]
        if (isOdd) {
            pos.push([startGameX + 1, startGameY + 1]);
            pos.push([startGameX + 1, startGameY - 1]);
        } else {
            pos.push([startGameX - 1, startGameY + 1]);
            pos.push([startGameX - 1, startGameY - 1]);
        }
        let minDist = Number.MAX_VALUE;
        let findPos = null;
        pos.forEach(([x, y]) => {
            if (x < 0 || y < 0) return;
            if (y % 2 === 1 && x === 7) return;
            if (this.gameBobble[x] && this.gameBobble[x][y]) return;
            const [px, py] = GameLayer.gameXYtoPosition(x, y);
            const dist = Math.sqrt(Math.pow(px - shot.position.x, 2) + Math.pow(py - shot.position.y, 2));
            if (dist < minDist) {
                minDist = dist;
                findPos = [x, y, px, py];
            }
        });
        return findPos;
    }

    private shakeBobble(startGameX: number, startGameY: number) {
        const isOdd = startGameY % 2 === 1;
        for (let x = 0; x < 2; x++) {
            for (let y = 0; y < 2; y++) {
                let gameX = Math.max(Math.min(7, startGameX + x + (isOdd ? 0 : -1)), 0);
                let gameY = Math.max(startGameY - y, 0);
                if (this.gameBobble[gameX] && this.gameBobble[gameX][gameY]) {
                    this.gameBobble[gameX][gameY].runAction(Tiny.Back(Tiny.MoveBy(100, Tiny.point(1, -1))));
                }
            }
        }
    }

    createBobbles(color: COLOR): Bobble {
        const bobble = this.bobbleSprites[color].clone();
        bobble.animationSpeed = 0.2;
        bobble.setAnchor(0.5);
        bobble.on('actionstart', GameLayer.bobbleActionStart);
        bobble.on('actionend', this.bobbleActionEnd.bind(this));
        bobble.playAction(Anim.IDLE);

        return bobble;
    }

    findExplosion(shotEnd: Bobble) {
        const hasFind = {};
        const shouldRemove = {};
        const list = [];
        const drop = [];
        let minY = 20;
        const findNext = (gameX: number, gameY: number) => {
            const key = `${gameX},${gameY}`;
            if (hasFind[key]) return;
            hasFind[key] = true;
            if (!this.gameBobble[gameX] || !this.gameBobble[gameX][gameY]) return;
            if (this.gameBobble[gameX][gameY].color === shotEnd.color) {
                if (gameY < minY) {
                    minY = gameY;
                }
                const isOdd = gameY % 2 === 1;
                let start = isOdd ? 0 : -1;
                list.push(this.gameBobble[gameX][gameY]);
                shouldRemove[key] = true;
                findNext(gameX - 1, gameY);
                findNext(gameX + 1, gameY);
                for (let i = 0; i < 2; i++) {
                    findNext(gameX + i + start, gameY - 1);
                    findNext(gameX + i + start, gameY + 1);
                }

            }
        }
        findNext(shotEnd.gameX, shotEnd.gameY);
        const canDropMap = {};
        const canDrop = (gameX: number, gameY: number, prevGameX: number = -1) => {
            const key = `${gameX},${gameY}`;
            if (canDropMap[key] != void 0) {
                return canDropMap[key];
            }
            if (shouldRemove[key]) {
                canDropMap[key] = true;
                return true;
            }
            if (!this.gameBobble[gameX] || !this.gameBobble[gameX][gameY]) {
                canDropMap[key] = true;
                return true;
            }
            if (gameY === 0) {
                canDropMap[key] = false;
                return false;
            }
            if (gameY % 2 === 1) {
                if (!canDrop(gameX, gameY - 1) || !canDrop(gameX + 1, gameY - 1)) {
                    canDropMap[key] = false;
                    return false;
                }
            } else {
                if (!canDrop(gameX, gameY - 1) || !canDrop(gameX - 1, gameY - 1)) {
                    canDropMap[key] = false;
                    return false;
                }
            }
            if (gameX - 1 != prevGameX && !canDrop(gameX - 1, gameY, gameX)) {
                canDropMap[key] = false;
                return false;
            }
            if (gameX + 1 != prevGameX && !canDrop(gameX + 1, gameY, gameX)) {
                canDropMap[key] = false;
                return false;
            }
            return true;
        };
        const findDrop = () => {
            for (let y = Math.max(minY, 1); y < 20; y++) {
                for (let x = 0; x < 8; x++) {
                    if (this.gameBobble[x] && this.gameBobble[x][y]) {
                        if (canDrop(x, y) && !shouldRemove[`${x},${y}`]) {
                            drop.push(this.gameBobble[x][y]);
                        }
                    }
                }
            }
        }
        if (list.length >= 3) {
            findDrop();
            drop.forEach(v => {
                const action = Tiny.MoveBy(500, { x: 0, y: 200 });
                this.gameBobble[v.gameX][v.gameY] = null;
                action.onComplete = this.handleDropEnd.bind(this, v);
                v.runAction(action);
            });
            list.forEach(v => v.playAction(Anim.EXPLOSION));
            if (list.length + drop.length >= 4) {
                Sound.getInstance().playExtraExplosion();
            }
        }
    }

    static gameXYtoPosition(gameX: number, gameY: number) {
        const isOdd = gameY % 2 === 1;
        let y = Math.floor(gameY / 2) * 28 + 15;
        let x = gameX * 16 + 15;
        if (isOdd) {
            y += 14;
            x += 8;
        }
        return [x, y];
    }

    static bobbleActionStart(anim: Anim) {
        if (Anim.EXPLOSION === anim) {
            Sound.getInstance().playExplosion();
        }
    }

    bobbleActionEnd(anim: Anim, bobble: Bobble) {
        if (Anim.IDLE !== anim) {
            bobble.playAction(Anim.IDLE);
        }
        if (Anim.EXPLOSION === anim) {
            this.gameBobble[bobble.gameX][bobble.gameY] = null;
            this.emit('bobbleremove', bobble);
            this.removeChild(bobble);
        }
    }

    handleShotEnd(shotEnd: Bobble) {
        if (shotEnd.gameY > 9) {
            this.emit("lose");
        }
        this.currentShot = this.nextShot;
        this.currentShot.setPosition(this.width / 2, 160 + 8);
        this.genNext();
        this.findExplosion(shotEnd);
    }

    handleDropEnd(bobble: Bobble) {
        this.emit('bobbleremove', bobble);
        this.removeChild(bobble);
    }

    handleAddBobble(bobble: Bobble) {
        const index = this.bobbleList.indexOf(bobble);
        if (index < 0) {
            this.bobbleList.push(bobble);
        }
    }

    handleBobbleRemove(bobble) {
        const index = this.bobbleList.indexOf(bobble);
        if (index >= 0) {
            this.bobbleList.splice(index, 1);
        }
        if (this.bobbleList.length === 0) {
            this.emit('win');
        }
    }

    handleWin() {
        this.canShot = false;
        Sound.getInstance().stopBg();
        Sound.getInstance().playWin();
        const win = Tiny.Sprite.fromFrame('tileset-win');
        win.setAnchor(0.5);
        win.setPosition(this.width / 2, this.height / 2);
        this.addChild(win);
    }

    handleLose() {
        this.canShot = false;
        Sound.getInstance().stopBg();
        Sound.getInstance().playLose();
        const lose = Tiny.Sprite.fromFrame('tileset-lose');
        lose.setAnchor(0.5);
        lose.setPosition(this.width / 2, this.height / 2);
        this.addChild(lose);
    }

    printBobbles() {
        for (let gameY = 0; gameY < 10; gameY++) {
            let str = `${gameY},`;
            const isOdd = gameY % 2 === 1;
            let end = 8;
            if (isOdd) {
                str += ' ';
                end = 7;
            }
            for (let gameX = 0; gameX < end; gameX++) {
                str += this.gameBobble[gameX] && this.gameBobble[gameX][gameY] ? `1 ` : '0 ';
            }
            console.info(str);
        }
    }
}
