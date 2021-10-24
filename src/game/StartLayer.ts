import GameLayer from './GameLayer';

class StartLayer extends Tiny.Container {
  constructor() {
    super();

    const { width, height } = Tiny.WIN_SIZE;
    const gameLayer = new GameLayer();
    const scale = width / gameLayer.width;
    gameLayer.setScale(scale);

    gameLayer.setPosition(0, 40);
    
    this.addChild(gameLayer);
    this.setEventEnabled(true);
    this.on('pointermove', ({ data: { global: { x, y } } }) => {
      gameLayer.setDist(x, y);
    });
    this.on('pointerup', ({ data: { global: { x, y } } }) => {
      console.info('touchend');
      gameLayer.shot(x, y);
    });
    document.body.addEventListener('keydown', (e) => {
      if (!isNaN(+e.key)) {
        gameLayer.replaceShot(+e.key);
      }
    })
  }
}

export default StartLayer;
