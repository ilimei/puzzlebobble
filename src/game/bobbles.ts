import { bobbles } from '../resources/bobbles';
import ActionAnimSprite from './ActionAnimSprite';
import { Anim, COLOR } from './constants';

export class Bobble extends ActionAnimSprite {
    gameX: number;
    gameY: number;
    color: COLOR;

    clone() {
        const sprite = new Bobble(this.textures);
        sprite.actionMap = this.actionMap;
        sprite.gameX = this.gameX;
        sprite.gameY = this.gameY;
        sprite.color = this.color;
        return sprite;
    }
}

export function getBobbleSprites(): Bobble[] {
    return Object.keys(bobbles).map((color: string, index: number) => {
        const bobble = bobbles[color];
        const bobbleSprite = new Bobble(bobble.textures.map(Tiny.Texture.fromFrame));
        bobbleSprite.addAction(Anim.IDLE, bobble[Anim.IDLE][0], bobble[Anim.IDLE][bobble[Anim.IDLE].length - 1]);
        bobbleSprite.addAction(Anim.SLASH, bobble[Anim.SLASH][0], bobble[Anim.SLASH][bobble[Anim.SLASH].length - 1]);
        bobbleSprite.addAction(Anim.EXPLOSION, bobble[Anim.EXPLOSION][0], bobble[Anim.EXPLOSION][bobble[Anim.EXPLOSION].length - 1]);
        bobbleSprite.color = index;
        return bobbleSprite;
    });
}
