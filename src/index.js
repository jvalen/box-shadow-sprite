console.log(
  `%c
  ██████╗███████╗███████╗    ███████╗██████╗ ██████╗ ██╗████████╗███████╗
 ██╔════╝██╔════╝██╔════╝    ██╔════╝██╔══██╗██╔══██╗██║╚══██╔══╝██╔════╝
 ██║     ███████╗███████╗    ███████╗██████╔╝██████╔╝██║   ██║   █████╗
 ██║     ╚════██║╚════██║    ╚════██║██╔═══╝ ██╔══██╗██║   ██║   ██╔══╝
 ╚██████╗███████║███████║    ███████║██║     ██║  ██║██║   ██║   ███████╗
  ╚═════╝╚══════╝╚══════╝    ╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝
BOX-SHADOW SPRITE

Ninja Gaiden CSS sprite created with https://www.pixelartcss.com/

©jvalen
http://www.jvrpath.com/
https://github.com/jvalen
`,
  "font-family:monospace"
);

import Demo from "./demo";
import Player from "./player";

window.addEventListener("load", function() {
  var demo = new Demo();
  demo.addBody(new Player("css-sprite", 3, 2, window.innerWidth));

  function tick() {
    demo.update();
    requestAnimationFrame(tick);
  }

  tick();
});
