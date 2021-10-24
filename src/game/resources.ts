// 打开注释即自动生成 tileset， 此功能需要安装 [ImageMagick](https://www.imagemagick.org/script/download.php)
// import 'res/frames/vendor/.tileset';
// import 'res/frames/hero/.tileset';

const logoPNG = 'res/images/Tiny.js.png';
const bgPNG = 'res/images/bg.png';
const tilesetVendorJSON = 'res/images/tilesets/tileset-vendor.json';
const bobblesJSON = 'res/images/tilesets/tileset-bobbles.json';
const playerJSON = 'res/images/tilesets/tileset-player.json';

const audios = {
  bgMusic: 'res/sounds/SinglePlayerMusic.ogg',
  readyGo: 'res/sounds/Reagy!Go!.ogg',
  elimination: 'res/sounds/BallsElimination.ogg',
  extraElimination: 'res/sounds/ExtraBallsElimination.ogg',
  shot: 'res/sounds/BubbleShot.ogg',
};

export const resources = {
  logoPNG,
  bgPNG,
  tilesetVendorJSON,
  playerJSON,
  bobblesJSON,
  audios: Object.keys(audios).map(name => {
    return { name, url: audios[name] }
  }),
};
