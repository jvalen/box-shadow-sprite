console.log(`%c
  ██████╗███████╗███████╗    ███████╗██████╗ ██████╗ ██╗████████╗███████╗
 ██╔════╝██╔════╝██╔════╝    ██╔════╝██╔══██╗██╔══██╗██║╚══██╔══╝██╔════╝
 ██║     ███████╗███████╗    ███████╗██████╔╝██████╔╝██║   ██║   █████╗
 ██║     ╚════██║╚════██║    ╚════██║██╔═══╝ ██╔══██╗██║   ██║   ██╔══╝
 ╚██████╗███████║███████║    ███████║██║     ██║  ██║██║   ██║   ███████╗
  ╚═════╝╚══════╝╚══════╝    ╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝
BOX-SHADOW SPRITE

Ninja gaiden CSS sprite created with http://pixelart.jvrpath.com/

©jvalen
http://www.jvrpath.com/
https://github.com/jvalen
`,
"font-family:monospace");

window.addEventListener("load", function() {
  var demo = new Demo();
  demo.addBody(new Player('css-sprite', 3, 2, window.innerWidth));

  function tick() {
    demo.update();
    requestAnimationFrame(tick);
  };

  tick();
});
