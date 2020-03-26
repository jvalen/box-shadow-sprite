import controlKeys from "./controlKeys";

const actorCommand = action => ({
  execute: actor => {
    actor[action]();
  }
});

const isKeyPressed = (keyState, keyCode) => {
  return keyState[keyCode] === true;
};

const inputHandler = function() {
  const keyState = {};

  return {
    init() {
      window.addEventListener("keydown", function(e) {
        keyState[e.keyCode] = true;
      });
      window.addEventListener("keyup", function(e) {
        keyState[e.keyCode] = false;
      });
    },
    handleInput() {
      if (isKeyPressed(keyState, controlKeys.LEFT)) {
        return actorCommand("inputLeft");
      } else if (isKeyPressed(keyState, controlKeys.RIGHT)) {
        return actorCommand("inputRight");
      }
      return null;
    }
  };
};

export default inputHandler;
