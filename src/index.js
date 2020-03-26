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

import actorCollection from "./actors";
import inputHandler from "./input/inputHandler";
import Player from "./player";

const initInput = () => {
  const input = inputHandler();
  input.init();
  return input;
};

const createActorCollection = inputHandler => {
  const actors = actorCollection(inputHandler);
  actors.addActor(new Player("css-sprite", 3, 2, window.innerWidth));
  return actors;
};

const tick = actors => {
  actors.update();
  requestAnimationFrame(() => {
    tick(actors);
  });
};

window.addEventListener("load", function() {
  const inputHandler = initInput();
  const actors = createActorCollection(inputHandler);
  tick(actors);
});
