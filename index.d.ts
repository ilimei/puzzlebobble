/// <reference path="node_modules/tinyjs-types/index.d.ts" />

declare namespace Tiny {
  var app: Application;
  var resources: any;
  var audio: any;
  var tiling: any;
}

interface ObjectConstructor {
  values(o: {}): string[];
}

declare module '*.less' {
  const content: any;
  export default content;
}
