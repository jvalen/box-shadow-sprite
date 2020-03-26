import Keyboard from "./keyboard";

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
  this.keyboard = new Keyboard();

  // Initial setup
  this.domItem.style.left = this.x + "px";
  this.updateSpriteFrame();
}

Player.prototype = {
  update: function() {
    var moveLeft = this.keyboard.isDown(this.keyboard.KEYS.LEFT);
    var moveRight = this.keyboard.isDown(this.keyboard.KEYS.RIGHT);

    if (moveLeft || moveRight) {
      this.auto = false;
      if (moveLeft) {
        this.moveLeft();
      } else if (moveRight) {
        this.moveRight();
      }
    } else if (this.auto) {
      this.moveRight();
    }
  },

  moveLeft: function() {
    this.x -= this.speed;
    this.updateSpriteFrame();
    this.updatePosition();
  },

  moveRight: function() {
    this.x += this.speed;
    this.updateSpriteFrame();
    this.updatePosition();
  },

  updateSpriteFrame: function() {
    this.tickCount++;
    if (this.tickCount >= this.ticksPerFrame) {
      this.frame = this.frame % this.framesCount === 0 ? 1 : this.frame + 1;
      this.domItem.className = this.id + "-" + this.frame;
      this.tickCount = 0;
    }
  },

  updatePosition: function() {
    this.domItem.style.left = this.x + "px";
    if (this.x > this.containerWidth) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = this.containerWidth;
    }
  }
};

export default Player;
