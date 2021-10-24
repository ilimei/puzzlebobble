import { bubblun } from '../resources/bobbles';
import ActionAnimSprite from './ActionAnimSprite';
import { Anim } from './constants';

export class Bubblun extends ActionAnimSprite {
}

export function getBubblunSprite(): Bubblun[] {
    return Object.keys(bubblun).map((color: string) => {
        const bobble = bubblun[color];
        const bobbleSprite = new Bubblun(bobble.textures.map(Tiny.Texture.fromFrame));
        bobbleSprite.addAction(Anim.IDLE, bobble[Anim.IDLE][0], bobble[Anim.IDLE][bobble[Anim.IDLE].length - 1]);
        bobbleSprite.addAction(Anim.MOVERIGHT, bobble[Anim.MOVERIGHT][0], bobble[Anim.MOVERIGHT][bobble[Anim.MOVERIGHT].length - 1]);
        return bobbleSprite;
    });
}
