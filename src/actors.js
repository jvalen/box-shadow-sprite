const actorCollection = inputHandler => {
  const collection = [];
  return {
    update() {
      const inputCommand = inputHandler.handleInput();
      collection.forEach(function(actor) {
        if (inputCommand) {
          inputCommand.execute(actor);
        }
        actor.update();
      });
    },
    addActor(actor) {
      collection.push(actor);
    }
  };
};

export default actorCollection;
