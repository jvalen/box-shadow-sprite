function Player(id, framesCount, initialSpeed, containerWidth) {
  this.domItem = document.getElementById(id);
  this.id = id;
  this.framesCount = framesCount;
  this.speed = initialSpeed;
  this.frame = 1;
  this.x = 0;
  this.tickCount = 0;
  this.ticksPerFrame = 5;
  this.auto = true;
  this.containerWidth = containerWidth;

  // Initial setup
  this.domItem.style.left = this.x + "px";
  this.updateSpriteFrame();
}

Player.prototype = {
  update: function() {
    if (this.auto) {
      this.moveRight();
    }
  },

  moveLeft() {
    this.x -= this.speed;
    this.updateSpriteFrame();
    this.updatePosition();
  },

  moveRight() {
    this.x += this.speed;
    this.updateSpriteFrame();
    this.updatePosition();
  },

  updateSpriteFrame() {
    this.tickCount++;
    if (this.tickCount >= this.ticksPerFrame) {
      this.frame = this.frame % this.framesCount === 0 ? 1 : this.frame + 1;
      this.domItem.className = this.id + "-" + this.frame;
      this.tickCount = 0;
    }
  },

  updatePosition() {
    this.domItem.style.left = this.x + "px";
    if (this.x > this.containerWidth) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = this.containerWidth;
    }
  },

  /* Input commands */
  inputLeft() {
    this.auto = false;
    this.moveLeft();
  },

  inputRight() {
    this.auto = false;
    this.moveRight();
  }
};

export default Player;
