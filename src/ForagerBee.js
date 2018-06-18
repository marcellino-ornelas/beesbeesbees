var ForagerBee = function(age, job) {
  Bee.call(this, age || 10, job || 'find pollen');
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create( Bee.prototype );
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(item){
  this.treasureChest.push(item);
};