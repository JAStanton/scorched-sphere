goog.provide('game.mixins.entity.Gravity');

goog.require('game.constants');
goog.require('game.core.helper');



/**
 * Gravity mixin.
 *
 * @constructor
 */
game.mixins.entity.Gravity = function() {};


/**
 * Register mixin globally.
 */
game.core.helper.mixins['gravity'] = game.mixins.entity.Gravity.prototype;


/**
 * Delta time in MS.
 *
 * @param {number} deltaTime
 */
game.mixins.entity.Gravity.prototype.update = function(deltaTime) {
  var velocity = this.getVelocity();
  velocity.setY(velocity.y + game.constants.Gravity * deltaTime);

  var position = this.getPosition();
  this.setPosition(position.x + velocity.x, position.y + velocity.y);
};