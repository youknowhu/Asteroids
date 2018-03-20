//Old way
Function.prototype.inherits = function (SuperClass) {
 function Surrogate() {};
 Surrogate.prototype = SuperClass.prototype;
 Function.prototype = new Surrogate();
 Function.prototype.constructor = Function;
};

//ES5
Function.prototype.inherits = function (SuperClass) {
  Function.prototype = Object.create(SuperClass.prototype)
  Function.prototype.constructor = Function;
};
