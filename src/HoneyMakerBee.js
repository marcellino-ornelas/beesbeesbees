var HoneyMakerBee = function() {
  Bee.call(this, 10, 'make honey');
  this.honeyPot = 0;

};

HoneyMakerBee.prototype = Object.create( Bee.prototype );
HoneyMakerBee.prototype.constructor = HoneyMakerBee;


HoneyMakerBee.prototype.makeHoney = function(){
  return ++this.honeyPot;
};

HoneyMakerBee.prototype.giveHoney = function(){
  return --this.honeyPot;
};