export default class ActionAnimSprite extends Tiny.AnimatedSprite {

    actionMap: Map<string, number[]> = new Map();

    clone(): ActionAnimSprite {
        const sprite = new ActionAnimSprite(this.textures);
        sprite.actionMap = this.actionMap;
        return sprite;
    }

    addAction(anim: string, startFrame: number, endFrame: number) {
        this.actionMap.set(anim, [startFrame, endFrame]);
    }

    playAction(anim: string) {
        if (!this.actionMap.has(anim)) return;
        const [startFrame, endFrame] = this.actionMap.get(anim);
        this.emit('actionstart', anim, this);
        this.onFrameChange = currentFrame => {
            if (currentFrame > endFrame || currentFrame < startFrame) {
                this.emit('actionend', anim, this)
                this.gotoAndPlay(startFrame);
            }
        }
        this.gotoAndPlay(startFrame);
    }
}
