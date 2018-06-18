var RetiredForagerBee = function() {
  ForagerBee.call(this, 40, 'gamble');
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create( ForagerBee.prototype );
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.gamble = ForagerBee.prototype.forage;

RetiredForagerBee.prototype.forage = function(item){
  return  "I am too old, let me play cards instead";
};
