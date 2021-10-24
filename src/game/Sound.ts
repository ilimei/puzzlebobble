export class Sound {
    static _instance: Sound;
    static getInstance(): Sound {
        if (!Sound._instance) {
            Sound._instance = new Sound;
        }
        return Sound._instance;
    }

    bg: any;
    isPlaying = false;

    playBg() {
        const music = Tiny.audio.manager.getAudio('bgMusic');
        music.loop = true;
        this.bg = music;
        this.isPlaying = true;
        music.play();
    }

    stopBg() {
        this.isPlaying = false;
        if (this.bg) {
            this.bg.stop();
        }
    }

    private playByName(name) {
        const music = Tiny.audio.manager.getAudio(name);
        music.play();
    }

    playReadyGo() {
        this.playByName('readyGo');
    }

    playShot() {
        this.playByName('shot');
    }

    playExplosion() {
        this.playByName('elimination');
    }

    playExtraExplosion() {
        this.playByName('extraElimination');
    }
    
    playWin() {
        this.playByName('win');
    }

    playLose() {
        this.playByName('lose');
    }
}
