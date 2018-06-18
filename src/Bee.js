var Bee = function(age, job) {
  Grub.call(
    this,
    age || 5, 
    'yellow'
  );

  this.job = job || 'keep on growing';
};

Bee.prototype = Object.create( Grub.prototype );
Bee.prototype.constructor = Bee;
// should be
// Object.defineProperty(Bee.prototype, 'constructor', {
//   value: Bee
// });

