function Demo() {
  this.bodies = [];
};

Demo.prototype = {
  update: function() {
    this.bodies.forEach(function(body) {
      body.update();
    });
  },

  addBody: function(body) {
    this.bodies.push(body);
  },
};
