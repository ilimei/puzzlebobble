// @ts-ignore
const bobblesJSON = require("../res/images/tilesets/tileset-bobbles.json");
const bubblunJSON = require("../res/images/tilesets/tileset-bubblun.json");
const fs = require('fs');

const bobbleAction = {};

const bobbles = {
    blue: {
        idle: [
            [11, 16, 16, 16],
            [31, 16, 16, 16],
            [51, 16, 16, 16],
            [11, 16, 16, 16],
        ],
        slash: [
            [71, 16, 16, 16],
            [92, 16, 16, 16],
            [112, 16, 16, 16],
            [132, 16, 16, 16],
            [152, 16, 16, 16],
            [172, 16, 16, 16],
        ],
        explosion: [
            [198, 8, 32, 31],
            [231, 8, 32, 31],
            [264, 8, 32, 31],
            [297, 8, 32, 31],
            [330, 8, 32, 31],
            [363, 8, 32, 31],
            [396, 8, 32, 31],
        ],
    },
    gray: {
        idle: [
            [11, 42, 16, 16],
            [31, 42, 16, 16],
            [51, 42, 16, 16],
            [11, 42, 16, 16],
        ],
        slash: [
            [71, 42, 16, 16],
            [92, 42, 16, 16],
            [112, 42, 16, 16],
            [132, 42, 16, 16],
            [152, 42, 16, 16],
            [172, 42, 16, 16],
        ],
        explosion: [
            [198, 40, 32, 31],
            [231, 40, 32, 31],
            [264, 40, 32, 31],
            [297, 40, 32, 31],
            [330, 40, 32, 31],
            [363, 40, 32, 31],
            [396, 40, 32, 31],
        ],
    },
    red: {
        idle: [
            [11, 68, 16, 16]
        ],
        slash: [
            [71, 68, 16, 16],
            [92, 68, 16, 16],
            [112, 68, 16, 16],
            [132, 68, 16, 16],
            [152, 68, 16, 16],
            [172, 68, 16, 16],
        ],
        explosion: [
            [198, 72, 32, 31],
            [231, 72, 32, 31],
            [264, 72, 32, 31],
            [297, 72, 32, 31],
            [330, 72, 32, 31],
            [363, 72, 32, 31],
            [396, 72, 32, 31],
        ]
    },
    yellow: {
        idle: [
            [11, 94, 16, 16],
            [31, 94, 16, 16],
            [51, 94, 16, 16],
            [11, 94, 16, 16],
        ],
        slash: [
            [71, 94, 16, 16],
            [92, 94, 16, 16],
            [112, 94, 16, 16],
            [132, 94, 16, 16],
            [152, 94, 16, 16],
            [172, 94, 16, 16],
        ],
        explosion: [
            [198, 104, 32, 31],
            [231, 104, 32, 31],
            [264, 104, 32, 31],
            [297, 104, 32, 31],
            [330, 104, 32, 31],
            [363, 104, 32, 31],
            [396, 104, 32, 31],
        ],
    },
    green: {
        idle: [
            [11, 120, 16, 16],
            [31, 120, 16, 16],
            [51, 120, 16, 16],
            [11, 120, 16, 16],
        ],
        slash: [
            [71, 120, 16, 16],
            [92, 120, 16, 16],
            [112, 120, 16, 16],
            [132, 120, 16, 16],
            [152, 120, 16, 16],
            [172, 120, 16, 16],
        ],
        explosion: [
            [198, 136, 32, 31],
            [231, 136, 32, 31],
            [264, 136, 32, 31],
            [297, 136, 32, 31],
            [330, 136, 32, 31],
            [363, 136, 32, 31],
            [396, 136, 32, 31],
        ],
    },
    black: {
        idle: [
            [11, 146, 16, 16],
            [31, 146, 16, 16],
            [51, 146, 16, 16],
            [11, 146, 16, 16],
        ],
        slash: [
            [71, 146, 16, 16],
            [92, 146, 16, 16],
            [112, 146, 16, 16],
            [132, 146, 16, 16],
            [152, 146, 16, 16],
            [172, 146, 16, 16],
        ],
        explosion: [
            [198, 168, 32, 31],
            [231, 168, 32, 31],
            [264, 168, 32, 31],
            [297, 168, 32, 31],
            [330, 168, 32, 31],
            [363, 168, 32, 31],
            [396, 168, 32, 31],
        ],
    },
    orange: {
        idle: [
            [11, 172, 16, 16],
            [31, 172, 16, 16],
            [51, 172, 16, 16],
            [11, 172, 16, 16],
        ],
        slash: [
            [71, 172, 16, 16],
            [92, 172, 16, 16],
            [112, 172, 16, 16],
            [132, 172, 16, 16],
            [152, 172, 16, 16],
            [172, 172, 16, 16],
        ],
        explosion: [
            [198, 200, 32, 31],
            [231, 200, 32, 31],
            [264, 200, 32, 31],
            [297, 200, 32, 31],
            [330, 200, 32, 31],
            [363, 200, 32, 31],
            [396, 200, 32, 31],
        ],
    },
    violet: {
        idle: [
            [11, 198, 16, 16],
            [31, 198, 16, 16],
            [51, 198, 16, 16],
            [11, 198, 16, 16],
        ],
        slash: [
            [71, 198, 16, 16],
            [92, 198, 16, 16],
            [112, 198, 16, 16],
            [132, 198, 16, 16],
            [152, 198, 16, 16],
            [172, 198, 16, 16],
        ],
        explosion: [
            [198, 232, 32, 31],
            [231, 232, 32, 31],
            [264, 232, 32, 31],
            [297, 232, 32, 31],
            [330, 232, 32, 31],
            [363, 232, 32, 31],
            [396, 232, 32, 31],
        ],
    },
}
// @ts-ignore
bobblesJSON.frames = Object.keys(bobbles).reduce((ret, color) => {
    const colorAnim = bobbles[color];
    bobbleAction[color] = {};
    let frameIndex = 0;
    const textures = [];
    bobbleAction[color].textures = textures;
    Object.keys(colorAnim).forEach(animName => {
        bobbleAction[color][animName] = [];
        colorAnim[animName].forEach(([x, y, w, h]) => {
            bobbleAction[color][animName].push(frameIndex);
            const name = `bobbles-${color}-${frameIndex++}`;
            textures.push(name);
            ret[name] = {
                "frame": {
                    "x": x,
                    "y": y,
                    "w": w,
                    "h": h
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": w,
                    "h": h
                },
                "sourceSize": {
                    "w": w,
                    "h": h
                }
            };
        });
    });
    return ret;
}, {});

fs.writeFileSync(__dirname + "/../res/images/tilesets/tileset-bobbles.json", JSON.stringify(bobblesJSON, null, 4));

const bubblun = {
    bubblun: {
        idle: [
            [11, 42, 26, 28],
            [38, 42, 26, 28],
            [65, 42, 26, 28],
            [92, 42, 26, 28],
        ],
        moveRight: [
            [8, 18, 29, 19],
            [38, 18, 29, 19],
            [68, 18, 29, 19],
            [98, 18, 29, 19],
            [128, 18, 29, 19],
            [158, 18, 29, 19],
            [188, 18, 29, 19],
            [218, 18, 29, 19],
        ],
    },
}
const bubblunAction = {};
bubblunJSON.frames = Object.keys(bubblun).reduce((ret, color) => {
    const colorAnim = bubblun[color];
    bubblunAction[color] = {};
    let frameIndex = 0;
    const textures = [];
    bubblunAction[color].textures = textures;
    Object.keys(colorAnim).forEach(animName => {
        bubblunAction[color][animName] = [];
        colorAnim[animName].forEach(([x, y, w, h]) => {
            bubblunAction[color][animName].push(frameIndex);
            const name = `bubblun-${color}-${frameIndex++}`;
            textures.push(name);
            ret[name] = {
                "frame": {
                    "x": x,
                    "y": y,
                    "w": w,
                    "h": h
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": w,
                    "h": h
                },
                "sourceSize": {
                    "w": w,
                    "h": h
                }
            };
        });
    });
    return ret;
}, {});
fs.writeFileSync(__dirname + "/../res/images/tilesets/tileset-bubblun.json", JSON.stringify(bubblunJSON, null, 4));

fs.writeFileSync(__dirname + "/../src/resources/bobbles.ts", `
// auto generator
export const bobbles = ${JSON.stringify(bobbleAction, null, 4)};
export const bubblun = ${JSON.stringify(bubblunAction, null, 4)};
`);